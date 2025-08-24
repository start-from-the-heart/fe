// Dùng Async/Await
async function getPokemon(name) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    if (!response.ok) throw new Error("Không tìm thấy Pokémon!");

    const data = await response.json();

    document.getElementById("result").innerHTML = `
          <h2>${data.name.toUpperCase()}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p>Chiều cao: ${data.height}</p>
          <p>Cân nặng: ${data.weight}</p>
        `;
  } catch (error) {
    document.getElementById(
      "result"
    ).innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

document.getElementById("searchBtn").addEventListener("click", () => {
  const name = document.getElementById("pokemonName").value;
  getPokemon(name);
  getPokemonWithPromise(name);
});

document.getElementById("ssBtn").addEventListener("click", () => {
  getManyPokemonWithThen(["pikachu", "charizard", "bulbasaur"]);
  getManyPokemonWithAsync(["pikachu", "charizard", "bulbasaur"]);
});

// Dùng Promise + .then()
function getPokemonWithPromise(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      if (!response.ok) throw new Error("Không tìm thấy Pokémon!");
      return response.json();
    })
    .then((data) => {
      console.log("Pokémon:", data.name);
      console.log("Chiều cao:", data.height);
      console.log("Cân nặng:", data.weight);
      document.getElementById("resultPromise").innerHTML = `
          <h2>${data.name.toUpperCase()}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p>Chiều cao: ${data.height}</p>
          <p>Cân nặng: ${data.weight}</p>
        `;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

function getManyPokemonWithThen(names) {
  const requests = names.map((name) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      if (!res.ok) throw new Error("Không tìm thấy Pokémon!");
      return res.json();
    })
  );

  Promise.all(requests)
    .then((pokemons) => {
      pokemons.forEach((p) => {
        console.log(
          `Pokémon: ${p.name}, Chiều cao: ${p.height}, Cân nặng: ${p.weight}`
        );
        document.getElementById("resultSS").innerHTML = `
          <h2>${p.name.toUpperCase()}</h2>
          <img src="${p.sprites.front_default}" alt="${p.name}">
          <p>Chiều cao: ${p.height}</p>
          <p>Cân nặng: ${p.weight}</p>
        `;
      });
    })
    .catch((error) => console.error("Error:", error.message));
}

async function getManyPokemonWithAsync(names) {
  try {
    const requests = names.map((name) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    );

    const responses = await Promise.all(requests);

    const dataPromises = responses.map((res) => {
      if (!res.ok) throw new Error("Không tìm thấy Pokémon!");
      return res.json();
    });

    const pokemons = await Promise.all(dataPromises);

    pokemons.forEach((p) => {
      console.log(
        `Pokémon: ${p.name}, Chiều cao: ${p.height}, Cân nặng: ${p.weight}`
      );
      document.getElementById("resultSS1").innerHTML = `
          <h2>${p.name.toUpperCase()}</h2>
          <img src="${p.sprites.front_default}" alt="${p.name}">
          <p>Chiều cao: ${p.height}</p>
          <p>Cân nặng: ${p.weight}</p>
        `;
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}
