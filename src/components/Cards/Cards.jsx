import "./Cards.css";

function calculateScore(
  pokemon,
  pokemons,
  setPokemons,
  setScore,
  index,
  setBestScore,
  bestScore
) {
  if (!pokemon.hasBeenClicked) {
    const newPokemons = [...pokemons];
    newPokemons[index].hasBeenClicked = true;
    setPokemons(newPokemons);
    setScore((s) => {
      if (s + 1 > bestScore) {
        setBestScore(s + 1);
      }
      if (s + 1 === 12) {
        alert("You have achieved the max score, Congrats!");
        return 0;
      }
      return s + 1;
    });
  } else {
    alert("You have clicked that! Restarting...");
    setPokemons(pokemons.map((pokemon) => (pokemon.hasBeenClicked = false)));
    setScore(0);
  }
}

function Cards({ pokemons, setPokemons, setScore, setBestScore, bestScore }) {
  return (
    <div className="cards-container">
      {pokemons.map((pokemon, index) => (
        <div
          key={index}
          onClick={() => {
            calculateScore(
              pokemon,
              pokemons,
              setPokemons,
              setScore,
              index,
              setBestScore,
              bestScore
            );
            setPokemons([...pokemons].sort(() => Math.random() - 0.5));
          }}
        >
          <img src={pokemon.href || null} alt={pokemon.name} />
          <div>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
