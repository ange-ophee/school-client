import { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Added role state
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!role) {
      alert('Please select a role');
      return;
    }

    try {
      const { data } = await registerUser({ name, email, password, role });
      const { token, role: userRole, name: userName } = data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', userRole);
      localStorage.setItem('name', userName);

      if (userRole === 'student') navigate('/student-dashboard');
      else navigate('/admin-dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.right}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            style={styles.input}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <select
            style={styles.input}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <div style={styles.passwordContainer}>
            <input
              style={styles.passwordInput}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              style={styles.toggleButton}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button type="submit" style={styles.submitButton}>
            Create Account
          </button>
        </form>
        <p style={styles.bottomText}>
          Already have an account?{' '}
          <span
            style={{ color: '#467fc1', cursor: 'pointer' }}
            onClick={() => navigate('/login')}
          >
            Come login here!
          </span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  right: {
    flex: 1,
    backgroundColor: '#b0dffb',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '150px',
    borderRadius: '0 20px 20px 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '350px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #CBD5E1',
    fontSize: '15px',
    width: '100%',
  },
  passwordContainer: {
    display: 'flex',
    width: '110%',
  },
  passwordInput: {
    flex: 1,
    padding: '12px',
    borderRadius: '8px 0 0 8px',
    border: '1px solid #CBD5E1',
    fontSize: '15px',
  },
  toggleButton: {
    padding: '0 15px',
    border: '1px solid #CBD5E1',
    borderLeft: 'none',
    backgroundColor: '#E2E8F0',
    cursor: 'pointer',
    borderRadius: '0 8px 8px 0',
  },
  submitButton: {
    background: 'linear-gradient(90deg, #467fc1, #467fc1)',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  bottomText: {
    marginTop: '15px',
    fontSize: '14px',
  },
};

export default RegisterForm;
