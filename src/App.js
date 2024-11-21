import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Accom from './Components/Accom'
import Services from './Components/Services'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Accom/>
      <Services/>
    </div>
  );
}

export default App;
