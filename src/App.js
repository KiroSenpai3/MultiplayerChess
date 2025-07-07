import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupOptions from './pages/SignupOptions';
import Signup from './pages/Signup';
import './index.css';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupOptions />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
