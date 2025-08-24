import React, { useEffect, useState } from "react";
import { Pokemon } from "../../services/interface/pokemon/pokemon";
import PokemonColection from "./PokemonColection";
import { getPokemonDetailsFromList, getPokemonList } from "../../services/modules/pokemon/pokemonServices";


export interface Detail {
  id: number;
  isOpened: boolean;
}

const PokemonApp: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [viewDetail, setDetail] = useState<Detail>({
    id: 0,
    isOpened: false,
  });

  // Load lần đầu
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemonList(20, 20); // có next và results
        setNextUrl(data.next);

        const detailedPokemons = await getPokemonDetailsFromList(data.results);
        setPokemons(detailedPokemons);
      } catch (err) {
        console.error("Error fetching pokemons:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  // Load thêm trang
  const nextPage = async () => {
    if (!nextUrl) return;
    setLoading(true);

    try {
      const url = new URL(nextUrl);
      const limit = url.searchParams.get("limit") || "20";
      const offset = url.searchParams.get("offset") || "0";

      const data = await getPokemonList(Number(limit), Number(offset));
      setNextUrl(data.next);

      const detailedPokemons = await getPokemonDetailsFromList(data.results);
      setPokemons((prev) => [...prev, ...detailedPokemons]);
    } catch (err) {
      console.error("Error loading next page:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="font-bold"> Pokemon</header>
        <PokemonColection
          pokemons={pokemons}
          viewDetail={viewDetail}
          setDetail={setDetail}
        />
        {!viewDetail.isOpened && (
          <div className="btn">
            <button onClick={nextPage}>
              {loading ? "Loading..." : "Load more"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonApp;
