import "../styles/Navegation.css"

function Navegation() {
    return (                  
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
    );
}

export default Navegation;