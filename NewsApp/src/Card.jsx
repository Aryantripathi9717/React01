export default function Card({author,description,img,handleNextClick, handlePreviousClick}){
    return (
        <div style={{ marginTop:"50px",position:"relative", height:"500px", width:"300px", backgroundColor:"silver", border:"1px solid black" , borderRadius:"5px"}}>
            <div style={{width:"295px", height:"250px", backgroundColor:"white", margin:"1px 2px", border:"0.5px solid black" , borderRadius:"5px"}}>
                <img style={{width:"295px", height:"250px",borderRadius:"5px"}} src={img} alt="photos" />
            </div>
            <p>Author : {author}</p>
            <p>Description :{description}</p>
            {/* <button style={{position:"absolute" , bottom:"5px" , left:"70px", padding:"3px 10px"}} onClick={handlePreviousClick}>Previous</button>
            <button style={{position:"absolute" , bottom:"5px" , left:"160px", padding:"3px 10px"}} onClick={handleNextClick}>Next</button> */}

        </div>
    )
}