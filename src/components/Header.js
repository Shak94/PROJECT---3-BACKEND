import {Link} from 'react-router-dom'
function Header(){
    return(
        <>
        <nav>
       <Link to = '/'>Home</Link>   
       <Link to ='/dreams'>Dreams</Link>    
       <Link to ='/nightmares'>Nightmares</Link>
        </nav>
        </>
    )
};

export default Header;