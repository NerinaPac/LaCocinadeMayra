import imagenHome from "../images/presentacion-home.jpg";
import "../styles/ContainerPresentacionHome.css";
import logoMayDos from "../images/logomaydos.png";
import corazon from "../images/corazon.png";



function ContainerPresentacionHome() {
    return(
        <div className="container-presentacion">
            <img className="img-home" src={imagenHome} />
            <img className="img-logodos" src={logoMayDos} />
            <p>Productos hechos a mano con amor</p>
            <img className="corazon-home" src={corazon} />
           
        </div>
        
    );

}

export default ContainerPresentacionHome;