import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/About">About Us</Link>

            <Link to="/Details/1">Student 1</Link>
            <Link to="/Details/2">Student 2</Link>
        </nav>
    )
}
export default Navbar;