// rafce 

export default function Header({title,color,...year}){
    let styles = {margin:'20px'}
    return(
        <>
            <nav style={{display:"flex",justifyContent:'center'}} >
               <a style={styles} href="">Home</a>
                <a style={styles}  href="">About</a>
                <a style={styles}  href="">Contact Us</a>
            </nav>
            <h1>{title}</h1>
        </>
    )
}