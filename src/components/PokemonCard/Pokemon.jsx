import "./Pokemon.css";

function Pokemon({name, img, moves, weight, abilities}) {
    console.log(abilities);
    return (
        <article className="pokemon-card">
            <h2>{name}</h2>
            <img src={img} alt={`foto van ${name}`}/>
            <p className="pokemon-info">
                <span className="label">Moves:</span>{moves}
            </p>
            <p className="pokemon-info">
                <span className="label">Weight:</span>{weight}
            </p>
            <p className="pokemon-info">
                <span className="label">Abilities:</span>
            </p>
            <ul className="pokemon-abilities">
                {abilities.map((ability, index) => (
                    <li className="pokemon-abilities" key={index}>{ability.ability.name}</li>
                ))}
            </ul>

        </article>
    )
}

export default Pokemon;