import {Link} from 'react-router-dom'
function Header(){
    return(
        <div className= "navbar">

        <nav>
       <Link to = '/'>Home</Link>   
       <Link to ='/dreams'>Dreams</Link>    
       <Link to ='/nightmares'>Nightmares</Link>
        </nav>
        </div>
    )
};

export default Header;