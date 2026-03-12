import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './home';
import Login from './Userlogin/login';
import Register from './Userlogin/signup';
import Dashboard from './Userlogin/Usereprofile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}    />
        <Route  path="/dashboard" element={<Dashboard />}            />
      </Routes>
    </BrowserRouter>
  );
}

export default App;