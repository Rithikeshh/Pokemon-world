export default function Header({toggleMouseEffect, effectType}){
    
    return(
        <>
        <div id="section">
            <h2>Pokemon KingDom</h2>
            <h2>Pokemon KingDom</h2>
        </div>
        <button id='effect-btn' onClick={toggleMouseEffect}>
          {effectType == 0 ? "Click me" : 'Change Effect'}  
        </button>
        </>
    )
}
