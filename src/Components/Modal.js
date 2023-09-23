export default function Modal({pokemon,handleModel}){
    return(
        <div className="modal" >
            <div className={`content ${pokemon.type}`}>

                <div id="pokemon-preview">
                    <img src={pokemon.image}/>
                    <div>{pokemon.name}</div>
                </div>
                <div className={`pokemon-info-container ${pokemon.type}`}>
                    <div className={`pokemon-info`}>
                        <div className="pokemon-info--section">
                            <div><strong>Weight:</strong> {pokemon.weight}</div>  
                            <div><strong>Height:</strong> {pokemon.height}</div>    
                        </div>
                        {/*<div className="pokemon-info--section">
                            <div><strong>Stat1:</strong> {pokemon.stats[0].stat.name}</div>
                            <div><strong>Stat2:</strong> {pokemon.stats[1].stat.name}</div>
                            <div><strong>Stat3:</strong> {pokemon.stats[2].stat.name}</div>
                            <div><strong>Stat4:</strong> {pokemon.stats[3].stat.name}</div>
                            <div><strong>Stat5:</strong> {pokemon.stats[4].stat.name}</div>
                            <div><strong>Stat6:</strong> {pokemon.stats[5].stat.name}</div>
                        </div>*/}
                        <Stats pokemonStatsList={pokemon.stats}/>
                        <BaseStats pokemonStatsList={pokemon.stats}/>
                        {/*<div className="pokemon-info--section">
                            <div><strong>Bs1:</strong> {pokemon.stats[0].base_stat}</div>
                            <div><strong>Bs2:</strong> {pokemon.stats[1].base_stat}</div>
                            <div><strong>Bs3:</strong> {pokemon.stats[2].base_stat}</div>
                            <div><strong>Bs4:</strong> {pokemon.stats[3].base_stat}</div>
                            <div><strong>Bs5:</strong> {pokemon.stats[4].base_stat}</div>
                            <div><strong>Bs6:</strong> {pokemon.stats[5].base_stat}</div>
                        </div>*/}
                    </div>
                </div>

                <div id="close" className={`btn-${pokemon.type}`}
                onClick={()=>{
                    document.querySelector('body').classList.toggle('non-scrollable')
                    handleModel();      
                }}
                >X</div>
            </div>
        </div>
    )
}
function Stats({pokemonStatsList}){
    return(
        <div className="pokemon-info--section">
            {pokemonStatsList.map((pokemonStat,index)=>( 
                <div><strong>{`Stat${index+1}`}:</strong> {pokemonStat.stat.name}</div>
            ))}   
        </div>
    )
}
function BaseStats({pokemonStatsList}){
    return(
        <div className="pokemon-info--section">
            {pokemonStatsList.map((pokemonStat,index)=>( 
                <div><strong>{`Bs${index+1}`}:</strong> {pokemonStat.base_stat}</div>
            ))}   
        </div>
    )
}