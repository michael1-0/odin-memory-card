import { useEffect, useState } from "react";
import "./App.css";
import { getPokemons } from "./utils/getPokemons";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [pokemons, setPokemons] = useState([
    {
      href: "",
      name: "",
      hasBeenClicked: false,
    },
  ]);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const pokemonData = await getPokemons();
        setPokemons(pokemonData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Cards
          pokemons={pokemons}
          setPokemons={setPokemons}
          setScore={setScore}
          setBestScore={setBestScore}
          bestScore={bestScore}
        />
      </main>
      <Footer score={score} bestScore={bestScore} />
    </>
  );
}

export default App;
