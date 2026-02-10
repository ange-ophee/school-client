import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div style={styles.container}>
      {/* Left side - graphic */}
      <div style={styles.left}>
        <h1>Welcome Back!</h1>
        <p>Sign in to access your account.</p>
      </div>

      {/* Right side - form */}
      <div style={styles.right}>
        <LoginForm />
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
 left: {
  flex: 1,
  backgroundImage: `
    linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url("https://png.pngtree.com/thumb_back/fh260/background/20221226/pngtree-technology-background-blue-background-technology-line-website-poster-background-image_1498278.jpg")
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px',
  textAlign: 'center',
  color: '#fff',
},
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: '#b0dffb',
  },
};

export default LoginPage;
