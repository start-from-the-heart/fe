import axios from "axios";
import { Pokemon } from "../../interface/pokemon/pokemon";

interface Pokemons {
  name: string;
  url: string;
}

// API base
const API_URL = "https://pokeapi.co/api/v2/pokemon";

// Lấy danh sách pokemon (theo page)
export const getPokemonList = async (limit = 20, offset = 0) => {
  const res = await axios.get(`${API_URL}?limit=${limit}&offset=${offset}`);
  return res.data; // có next, previous, results
};

// Lấy chi tiết 1 pokemon
export const getPokemonDetail = async (name: string): Promise<Pokemon> => {
  const res = await axios.get(`${API_URL}/${name}`);
  return res.data;
};

// Lấy danh sách chi tiết từ results
export const getPokemonDetailsFromList = async (list: Pokemons[]): Promise<Pokemon[]> => {
  const promises = list.map((pokemon) => getPokemonDetail(pokemon.name));
  return Promise.all(promises);
};
