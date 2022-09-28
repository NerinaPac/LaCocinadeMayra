import logoMayDos from "../images/home/logomaydos.png";
import corazon from "../images/home/corazon.png";
import "../styles/LogoCocinaMay.css"

function LogoCocinaMay() {
    return(
        <div className="container-logo">

            <img className="img-logodos" src={logoMayDos} alt="Logo del emprendimiento: Un circulo con hojas, 
            con el nombre Cocina de Mayra dentro"  />
            <p className="logo-p">Productos hechos a mano con amor</p>
            <img className="corazon-home" src={corazon}  alt="Un corazon latiendo" />
            
        </div>


    );
}

export default LogoCocinaMay;