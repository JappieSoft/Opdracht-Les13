import './App.css'
import Button from "./components/Buttons/Button.jsx";
import {useEffect, useState} from "react";
import pullAllPokeMon from "./helpers/apiScripts.js";
import Pokemon from "./components/PokemonCard/Pokemon.jsx";

function App() {
    const [pokeIndex, setPokeIndex] = useState("");
    const [pokeLink, setPokeLink] = useState("https://pokeapi.co/api/v2/pokemon");
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        pullAllPokeMon(setError, setPokeIndex, toggleLoading, pokeLink)
    }, [pokeLink]);

    console.log(pokeLink);

    return (
    <>
        <header className="App-header">
            <h1>Gotta catch em all!</h1>
            <span className="page-controls">
            <Button
                buttonType={"button"}
                name={"Previous"}
                isDisabled={loading === true || pokeIndex.previous === null}
                action={() => setPokeLink(pokeIndex.previous)}
            />
            <Button
                buttonType={"button"}
                name={"next"}
                isDisabled={loading === true || pokeIndex.next === null}
                action={() =>setPokeLink(pokeIndex.next)}
            />
            </span>
        </header>
        <main>
            {loading && <h3>loading...</h3>}
            {error && <h3>{error}</h3>}
            <section className="pokemon-collection">
            {Object.keys(pokeIndex).length > 0 &&
                    pokeIndex.results.map((pokemon, index) => {
                            return (
                                <Pokemon key={index} url={pokemon.url} />
                            )})}
            </section>
        </main>
    </>
)}

export default App
