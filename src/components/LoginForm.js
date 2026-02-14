import { useState } from 'react';
import { loginUser, setAuthToken } from '../services/api';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      const { data } = await loginUser({ email, password });
      const { token, role, name } = data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('name', name);
      setAuthToken(token);

      if (role === 'student') navigate('/student-dashboard');
      else navigate('/admin-dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.right}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <div style={styles.passwordContainer}>
            <input
              style={styles.passwordInput}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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
          <button type="submit" style={styles.submitButton}>Sign In</button>
        </form>
        <p style={styles.bottomText}>
          Don't have an account yet ?{' '}
          <span style={{ color: '#477fa2', cursor: 'pointer' }} onClick={() => navigate('/register')}>Register Here !</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;