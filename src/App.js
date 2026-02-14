import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setAuthToken } from './services/api';

import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentPage from './pages/StudentPage';
import AdminPage from './pages/AdminPage';
import Navbar from './components/Navbar';

function App() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  // set token for axios
  useEffect(() => {
    if (token) setAuthToken(token);
  }, [token]);

  return (
    <Router>
      <Navbar /> {/* Always show navbar */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes */}
        <Route
          path="/student-dashboard"
          element={
            token && role === 'student'
              ? <StudentPage />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            token && role === 'admin'
              ? <AdminPage />
              : <Navigate to="/login" />
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;