export default function Footer({handleShowMore}){
    
    return(
        <div className="footer">
            <div>
                <button className="btn" onClick={()=>handleShowMore()}>Show more</button>
            </div>
        </div>
    )
}