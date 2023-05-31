import {Link} from 'react-router-dom'
function Header(){
    return(
        <div className= "nav">
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <Link className="nav-link" to = '/'>Home</Link>   
  <Link className="nav-link" to ='/dreams'>Dreams</Link>    
  <Link className="nav-link" to ='/nightmares'>Nightmares</Link>
       </div>
        </nav>
        </div>
    )
};

export default Header;