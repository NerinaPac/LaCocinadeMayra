import "../styles/Navegation.css";
import LogoMay from "../images/logomayraaa.png";
import NavegationRedes from "./NavegationRedes";


function Navegation() {
    return ( 
        <div className="container-nav"> 
            <a className="logo-a">
                <img className="logo-img" src={LogoMay}/>
            </a>                
            <nav>        
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

        </div>
        
    );
}

export default Navegation;