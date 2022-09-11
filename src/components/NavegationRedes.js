import Face from "../images/navegation/face.png";
import Instagram from "../images/navegation/Insta.png";
import Whatsapp from "../images/navegation/what.png";
import "../styles/NavegationRedes.css";

function NavegationRedes() {
    return(
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

    );
}
export default NavegationRedes;