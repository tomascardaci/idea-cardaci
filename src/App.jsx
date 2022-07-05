import './App.css';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/> 
        <ItemListContainer greeting={"¡Bienvenidos!"}>
          <h3>Proyecto de Tomás Cardaci</h3>
        </ItemListContainer> 
      </header>
    </div>
  );
}

export default App;
