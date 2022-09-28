import './App.css';
import Navegation from "./components/Navegation.js"
import ContainerPresentacionHome from './components/ContainerPresentacionHome.js';
import ServiciosMay from './components/ServiciosMay';

function App() {
  return (
    <div className="App">          
      <Navegation />
      <main>
        <ContainerPresentacionHome />
        <ServiciosMay />

        
      
      </main>
    </div>
  );
}

export default App;
