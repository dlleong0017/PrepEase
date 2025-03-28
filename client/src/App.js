import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>PrepEase</h1>
      <button onClick={() => navigate('/reg')}>Register</button>
      <button onClick={() => navigate('/login')}>Login</button>
      <hr />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
