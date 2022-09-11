import "../styles/Navegation.css";
import LogoMay from "../images/logomayraaa.png";
import Face from "../images/navegation/face.png";
import Instagram from "../images/navegation/Insta.png";
import Whatsapp from "../images/navegation/what.png";

function Navegation() {
    return ( 
        <div className="container-nav"> 
            <a><img className="logo-mayra" src={LogoMay}/></a>                
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

            <nav className="nav-redes">
                <ul className="nav-redes-lista">
                    <li className="nav-redes-lista-item">
                        <a className="nav-redes-lista-item-a">
                            <img className="redes-sociales" src={Face} />
                        </a>
                    </li>
                    <li className="nav-redes-lista-item">
                        <a className="nav-redes-lista-item-a">
                            <img className="redes-sociales" src={Instagram} />
                        </a>
                    </li>
                    <li className="nav-redes-lista-item">
                        <a className="nav-redes-lista-item-a"> 
                            <img className="redes-sociales" src={Whatsapp} />
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
        
    );
}

export default Navegation;