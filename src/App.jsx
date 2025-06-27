import './App.css'
import Button from "./components/Buttons/Button.jsx";
import {useEffect, useState} from "react";
import pullAllPokeMon, {pullSpecificPokeMon} from "./helpers/apiScripts.js";
import Pokemon from "./components/PokemonCard/Pokemon.jsx";

function App() {
    const [pokeIndex, setPokeIndex] = useState("");
    const [pokeData, setPokeData] = useState("");
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);
    const pokeLink = "https://pokeapi.co/api/v2/pokemon/1/";

    useEffect(() => {
        pullAllPokeMon(setError, setPokeIndex, toggleLoading);
        /*pullSpecificPokeMon(setError, setPokeData, toggleLoading, pokeLink);*/
    }, []);

    console.log(pokeIndex);
    console.log(pokeData);

    return (
    <>
        <header className="App-header">
            <h1>Gotta catch em all!</h1>
            <span className="page-controls">
            <Button
                buttonType={"button"}
                name={"Previous"}
                isDisabled={loading === true}
                action={() => pullSpecificPokeMon(setError, setPokeData, toggleLoading, pokeLink)}
            />
            <Button
                buttonType={"button"}
                name={"next"}
                isDisabled={loading === true}
                action={() => pullSpecificPokeMon(setError, setPokeData, toggleLoading, pokeLink)}
            />
            </span>
        </header>
        <main>
            {pokeData &&
                <Pokemon
                    name={pokeData.name}
                    img={pokeData.sprites.front_default}
                    moves={pokeData.moves.length}
                    weight={pokeData.weight}
                    abilities={pokeData.abilities}
                />}

        </main>
    </>
)
}

export default App
