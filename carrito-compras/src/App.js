import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from  'react-router-dom';
import CarritoContextProvider from './Context/UserContext';

//Components
import { Routes } from './Routes';
//Context
import './Styles/Estilos.css';

function App() {
  return (
    <div className="App">
      <CarritoContextProvider>
        <Router>
            <div >
              <Routes />
            </div>
        </Router>
      </CarritoContextProvider>
    </div>
  );
}

export default App;
