export default function Footer({card}){
    return(
        
        <div style={{ position:"relative", backgroundColor : 'white',color:'black', height:"100px"}}>
        {card}
        <p>{year} {company}</p>
        <p>Deepak {obj.deepak} and his age is {obj.age}</p>
        </div>
    )
}