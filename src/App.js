import './App.css';
import Formulario from './components/Formulario';
import ListagemPagamentos from './components/ListagemPagamentos';

function App() {
  return (
    <div className="App">
      <Formulario/>
      <ListagemPagamentos/>
     <span id="node-version"></span><br/>
     <span id="chrome-version"></span><br />
     <span id="electron-version"></span>
    </div>
  );
}

export default App;
