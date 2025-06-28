import './App.css'
import Button from "./components/Buttons/Button.jsx";
import {useEffect, useState} from "react";
import Pokemon from "./components/PokemonCard/Pokemon.jsx";
import axios from "axios";

function App() {
    const [pokeIndex, setPokeIndex] = useState("");
    const [pokeLink, setPokeLink] = useState("https://pokeapi.co/api/v2/pokemon");
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function pullAllPokeMon() {
            setError("");
            toggleLoading(true);
            try {
                const response = await axios.get(pokeLink,{
                    signal: controller.signal,})
                setPokeIndex(response.data)
            } catch (err) {
                console.error(err);
                setError("Er ging iets fout gegaan bij het ophalen van de data.");
            } finally {
                toggleLoading(false);
            }
        }
        pullAllPokeMon();

        return function cleanup() {
            controller.abort();
        }
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
        <main className="pokemon-collection">
            {loading && <h3>Finding Pokemon!</h3>}
            {error && <h3>They are hiding, we are unable to find them!</h3>}
            {Object.keys(pokeIndex).length > 0 &&
                    pokeIndex.results.map((pokemon, index) => {
                            return (
                                <Pokemon key={index} url={pokemon.url} />
                            )})}
        </main>
    </>
)}

export default App
