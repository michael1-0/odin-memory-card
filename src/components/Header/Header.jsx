import "./Header.css";

function Header({ setPokemons, setScore, pokemons }) {
  return (
    <header>
      <div className="heading-container">
        <h1>It's simple.</h1>
        <h2>
          Get points from clicking on an image, but don't click the same image
          any more than once!
        </h2>
      </div>
      <button
        onClick={() => {
          alert("Restarting...");
          const newPokemons = [...pokemons];
          for (let i = 0; i < newPokemons.length; i++) {
            newPokemons[i].hasBeenClicked = false;
          }
          setPokemons(newPokemons);
          setScore(0);
        }}
      >
        Restart
      </button>
    </header>
  );
}

export default Header;
