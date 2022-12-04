import Tournament from './Tournament';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Algo from './Algo';
import Results from './Results';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Tournament />} />
          <Route path="/algo" element={<Algo />} /> 
          <Route path="/results" element={<Results />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
