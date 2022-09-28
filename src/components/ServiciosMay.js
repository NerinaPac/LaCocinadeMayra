import menuMay from "../images/servicios/menues-mayra.jpg";
import "../styles/ServiciosMay.css";

function ServiciosMay() {
    return (
        <div className="contenedor-servicio">
            <img className="servicio-img" src={menuMay} />
            <div className="servicio-texto">
                <h3>Menues Diarios</h3>
                <p>Viandas caseras y frescas, que van cambiando cada dia (ensaladas, tartas, carnes, guisos, pastas, etc.), 
                    incluyen postre. </p>
            </div>
        
        </div>
    );


}

export default ServiciosMay;