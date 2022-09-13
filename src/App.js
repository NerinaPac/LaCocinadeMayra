import './App.css';
import Navegation from "./components/Navegation.js"
import ContainerPresentacionHome from './components/ContainerPresentacionHome.js';

function App() {
  return (
    <div className="App">          
      <Navegation />
      <main>
        <ContainerPresentacionHome />
      
      </main>
    </div>
  );
}

export default App;
