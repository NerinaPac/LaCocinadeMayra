import "../styles/Navegation.css";
import LogoMay from "../images/logomayraaa.png";
import NavegationRedes from "./NavegationRedes";


function Navegation() {
    return ( 
        <header className="header-nav"> 
            <a className="logo-a">
                <img className="logo-img" src={LogoMay}/>
            </a>                
            <nav className="nav-main">        
                <ul className="nav-list">
                    <li className="nav-list_item">
                        <a className="nav-list_item-a">
                            Mis productos
                        </a>
                    </li>
                    <li className="nav-list_item">
                        <a className="nav-list_item-a">
                            Acerca de mi
                        </a>
                    </li>
                    <li className="nav-list_item">
                        <a className="nav-list_item-a">
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>

            <NavegationRedes />            

        </header>
        
    );
}

export default Navegation;