import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

function Home() {
  return (
    <div>
      <h1>Welcome to PrepEase</h1>
      <Link to="/reg">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
