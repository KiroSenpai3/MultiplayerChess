import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupOptions from './pages/SignupOptions';
import Signup from './pages/Signup';
import './index.css';
import Login from './pages/Login';
import Dashboard from './pages/HomePage';
import Play from './pages/Play';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/signupoptions' element={<SignupOptions />} />
        <Route path='/play' element={<Play />} />
      </Routes>
    </Router>
  );
}

export default App;
