import logoMayDos from "../images/logomaydos.png";
import corazon from "../images/corazon.png";
import "../styles/LogoCocinaMay.css"

function LogoCocinaMay() {
    return(
        <div className="container-logo">

            <img className="img-logodos" src={logoMayDos}  />
            <p className="logo-p">Productos hechos a mano con amor</p>
            <img className="corazon-home" src={corazon} />
            
        </div>


    );
}

export default LogoCocinaMay;