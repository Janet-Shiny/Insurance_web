import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Accom from './Components/Accom'
import Services from './Components/Services'
import Industry from './Components/Industry';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Accom/>
      <Services/>
      <Industry/>
    </div>
  );
}

export default App;
