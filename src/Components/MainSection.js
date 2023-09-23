export default function Main({pokemonList, handleModel, handleSelectedPokemon}){

    return (
        <div className="app-container">
            <div className="pokemon-container">
                {pokemonList.map((pokemon,index)=>(
                    <div key={pokemon.id} className={`card ${pokemon.type}`}>
                        <div className="number">{`#${pokemon.id}`}</div>
                        <img src={pokemon.image} alt={pokemon.name}/>
                        <div className="details">
                            <h3>{pokemon.name}</h3>
                            <small>Type: {pokemon.type}</small>
                        </div>
                        <div className="more-details">
                            <button className={`btn btn-${pokemon.type}`} onClick={()=>{
                                handleModel();
                                document.querySelector('body').classList.toggle('non-scrollable')
                                handleSelectedPokemon(index);
                            }}>Know more...</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}