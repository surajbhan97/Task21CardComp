
const Cards = (props) => {
    return(
        <>
        
        <div className="card">
            <div className="subCard">
                <img src= {props.img} className="card-img-top" alt="random img"/>
                <div className="card-body">
                    <p className="card-text">{props.name} </p>
                    <p className="card-text">{props.des} </p>
                </div>
            </div>

        </div>   
        </>
    )
  
}
export default Cards