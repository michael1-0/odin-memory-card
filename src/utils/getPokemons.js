export async function getPokemons(count = 12) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`);
  const data = await res.json();

  const detailPromises = data.results.map((pokemon) =>
    fetch(pokemon.url).then((res) => res.json())
  );

  const detailedPokemons = await Promise.all(detailPromises);
  const pokemons = [];

  detailedPokemons.map((detailedPokemon) => {
    pokemons.push({
      name: detailedPokemon.name,
      href: detailedPokemon.sprites.front_default,
    });
  });

  return pokemons;
}
