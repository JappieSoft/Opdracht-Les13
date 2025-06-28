import "./Pokemon.css";
import useFetch from "../../helpers/useFetch.js";

function Pokemon(apiLink) {
    const {data, error, loading} = useFetch(apiLink.url);

    if(error.error){
        console.log(error.error)
    }

    return(
        <>
            <article className="pokemon-card">
                {error &&
                    <>
                        <p className="error">
                            {`Your ${apiLink.name} hit in the bushes
                And found and error!`}</p>
                    </>}
                {loading && <p>Getting your Pokemon!</p>}
                {data && (
                    <>
                        <h2>{data.name}</h2>
                        <img src={data.sprites.front_default} alt={`foto van ${data.name}`}/>
                        <p className="pokemon-info">
                            <span className="label">Moves:</span>{data.moves.length}
                        </p>
                        <p className="pokemon-info">
                            <span className="label">Weight:</span>{data.weight}
                        </p>
                        <p className="pokemon-info">
                            <span className="label">Abilities:</span>
                        </p>
                        <ul className="pokemon-abilities">
                            {data.abilities.map((ability, index) => (
                                <li className="pokemon-abilities" key={index}>{ability.ability.name}</li>
                            ))}
                        </ul>
                    </>
                )}
            </article>
        </>
    )
}

export default Pokemon;