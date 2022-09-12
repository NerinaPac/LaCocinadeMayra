import './App.css';
import Navegation from "./components/Navegation.js"
import PresentacionHome from "./images/presentacion-home.jpg"

function App() {
  return (
    <div className="App">          
      <Navegation />
      <img src={PresentacionHome}/>
      
    </div>
  );
}

export default App;
