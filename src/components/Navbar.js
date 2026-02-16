import { Link, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../services/api';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    setAuthToken(null);
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>DormMate</h2>

      <div style={styles.links}>
        {!token && (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}

        {token && (
          <>
            <Link
              to={role === 'admin' ? '/admin-dashboard' : '/student-dashboard'}
              style={styles.link}
            >
              Dashboard
            </Link>
            <button onClick={handleLogout} style={styles.logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 30px',
    backgroundColor: '#235cb0',
    color: '#fff',
    alignItems: 'center'
  },
  logo: { margin: 0 },
  links: { display: 'flex', gap: '15px', alignItems: 'center' },
  link: { color: '#fff', textDecoration: 'none', fontSize: '16px' },
  logout: {
    background: '#EF4444',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer'
  }
};

export default Navbar;
