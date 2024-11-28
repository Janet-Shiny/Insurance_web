import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ScrollablePage from './Components/Scroll';
import Healthins from './Components/Healthins';
import Homeins from './Components/Homeins';
import AutoInsurance from './Components/Autoins';
import Lifeins from './Components/Lifeins';
import QuotePage from './Components/QuotePage';  // Import new QuotePage component

function App() {
  return (
    <div className="App">
      <Router>
        {/* Common Header */}
        <Header />

        {/* Routes for all pages */}
        <Routes>
          {/* Scrollable Page for Main Sections */}
          <Route path="/" element={<ScrollablePage />} />

          {/* Separate Pages for Insurance */}
          <Route path="/Lifeins" element={<Lifeins />} />
          <Route path="/health-insurance" element={<Healthins />} />
          <Route path="/home-insurance" element={<Homeins />} />
          <Route path="/auto-insurance" element={<AutoInsurance />} />
          
          {/* New Route for Get a Quote Page */}
          <Route path="/get-a-quote" element={<QuotePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
