import { Link, useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const goToDashboard = () => {
    navigate(role === 'admin' ? '/admin-dashboard' : '/student-dashboard');
  };

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Student Hostel Management System
          </h1>
          <p style={styles.heroSubtitle}>
            A centralized digital platform designed to simplify hostel
            accommodation requests, ensure fair allocation, and improve
            transparency between students and administrators.
          </p>

          <div style={styles.heroButtons}>
            {!token ? (
              <>
                <Link to="/register" style={styles.link}>
                  <button style={styles.primaryButton}>Create Account</button>
                </Link>
                <Link to="/login" style={styles.link}>
                  <button style={styles.secondaryButton}>Login</button>
                </Link>
              </>
            ) : (
              <button style={styles.primaryButton} onClick={goToDashboard}>
                Go to Dashboard
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutOverlay} />

        <div style={styles.aboutContent}>
          <h2 style={styles.sectionTitleLight}>
            What is this system about?
          </h2>

          <p style={styles.sectionTextLight}>
            The Student Hostel Allocation System is a web-based platform designed
            to modernize the way student accommodation is requested, reviewed,
            and assigned. It eliminates paperwork, long queues, and manual errors
            by providing a structured, transparent, and secure digital process
            for both students and administrators.
          </p>

          <div style={styles.aboutGrid}>
            <div style={styles.aboutCard}>
              <h3>👩‍🎓 For Students</h3>
              <p>
                Students can apply for hostel accommodation online, track the
                progress of their requests in real time, and receive approval
                decisions without visiting administrative offices physically.
              </p>
              <ul style={styles.aboutList}>
                <li>Online hostel application</li>
                <li>Real-time status tracking</li>
                <li>Transparent approval process</li>
              </ul>
            </div>

            <div style={styles.aboutCard}>
              <h3>🧑‍💼 For Administrators</h3>
              <p>
                Administrators manage all hostel requests from a centralized
                dashboard, ensuring fair allocation, accurate record keeping,
                and efficient decision-making.
              </p>
              <ul style={styles.aboutList}>
                <li>Centralized request management</li>
                <li>Fair approval or rejection workflow</li>
                <li>Secure data handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.featuresSection}>
        <div style={styles.featuresOverlay}>
          <h2 style={styles.sectionTitleLight2}>Key Features</h2>
          <p style={styles.sectionSubtitle2}>
            Everything you need for a fair, efficient, and modern hostel management
            experience.
          </p>

          <div style={styles.featuresGrid}>
            <div
              style={styles.featureCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
              <span style={styles.featureIcon}>⚖️</span>
              <h3>Fair Allocation</h3>
              <p>
                Allocation decisions are based on predefined criteria, ensuring
                transparency and equal opportunity for all applicants.
              </p>
            </div>

            <div
              style={styles.featureCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
              <span style={styles.featureIcon}>📊</span>
              <h3>Real-Time Status Tracking</h3>
              <p>
                Students can monitor their application progress at every stage of the
                review process.
              </p>
            </div>

            <div
              style={styles.featureCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
              <span style={styles.featureIcon}>🔐</span>
              <h3>Secure Authentication</h3>
              <p>
                Accounts are protected with authentication mechanisms to safeguard
                personal and institutional data.
              </p>
            </div>

            <div
              style={styles.featureCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
              <span style={styles.featureIcon}>🧭</span>
              <h3>Centralized Management</h3>
              <p>
                Administrators manage all requests from one dashboard, reducing
                paperwork and operational delays.
              </p>
            </div>

           <div
              style={styles.featureCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
            <span style={styles.featureIcon}>🔔</span>
              <h3>Automated Notifications</h3>
              <p>
                Students receive updates via the system when their application status
                changes, eliminating uncertainty and repeated follow-ups.
              </p>
            </div>

            <div
              style={styles.featureCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
            <span style={styles.featureIcon}>📄</span>
              <h3>Digital Records & Reporting</h3>
              <p>
                All allocation data is stored securely and can be reviewed or exported
                for audits, reports, and future planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={styles.howItWorksSection}>
        <h2 style={styles.sectionTitle}>How the system works</h2>
        <p style={styles.sectionSubtitle}>
          A simple, transparent process designed to make hostel allocation stress-free
          for students and administrators.
        </p>
        <div style={styles.steps}>
          <div style={styles.step}>
            <div style={styles.stepBadge}>1</div>
            <span style={styles.stepIcon}>👤</span>
            <h3>Create an Account</h3>
            <p>
              Students register or log in securely to access the hostel management platform.
            </p>
          </div>

          <div style={styles.step}>
            <div style={styles.stepBadge}>2</div>
            <span style={styles.stepIcon}>📝</span>
            <h3>Submit Application</h3>
            <p>
              Fill in your hostel request with accurate details and submit it online.
            </p>
          </div>

          <div style={styles.step}>
            <div style={styles.stepBadge}>3</div>
            <span style={styles.stepIcon}>🧑‍💼</span>
            <h3>Admin Review</h3>
            <p>
              Administrators review applications based on availability and eligibility.
            </p>
          </div>

          <div style={styles.step}>
            <div style={styles.stepBadge}>4</div>
            <span style={styles.stepIcon}>✅</span>
            <h3>Final Decision</h3>
            <p>
              Students receive approval or rejection notifications in real time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to get started?</h2>

          <p style={styles.ctaText}>
            Apply for your hostel in minutes and track everything in one clear,
            transparent system.
          </p>

          {!token ? (
            <Link to="/register" style={styles.link}>
              <button style={styles.primaryButtonLarge}>
                Apply for Accommodation
              </button>
            </Link>
          ) : (
            <button
              style={styles.primaryButtonLarge}
              onClick={goToDashboard}
            >
              Go to Dashboard
            </button>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p style={styles.footerMain}>
          © 2026 Student Hostel Management System
        </p>
        <p style={styles.footerSub}>
          Academic Project · Hostel Allocation Platform
        </p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#F8FAFC',
  },

  /* HERO */
  hero: {
    minHeight: '100vh',
    backgroundImage:
  'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  heroOverlay: {
    minHeight: '100vh',
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '42px',
    marginBottom: '20px',
  },
  heroSubtitle: {
    maxWidth: '750px',
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '35px',
    color: '#E5E7EB',
  },
  heroButtons: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },

  /* SECTIONS */
  section: {
    padding: '80px 60px',
    backgroundColor: '#FFFFFF',
  },
  altSection: {
    padding: '80px 60px',
    backgroundColor: '#F1F5F9',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '30px',
    marginBottom: '30px',
    color: '#1E293B',
  },
  sectionText: {
    maxWidth: '800px',
    margin: '0 auto 50px',
    textAlign: 'center',
    color: '#475569',
    lineHeight: '1.6',
  },

  /* ABOUT */
  aboutSection: {
  position: 'relative',
  padding: '90px 60px',
  backgroundImage:
    'url("https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  },

  aboutOverlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(6, 11, 36, 0.85), rgba(2,6,23,0.75))',
  },

  aboutContent: {
    position: 'relative',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  sectionTitleLight: {
    textAlign: 'center',
    fontSize: '30px',
    color: '#F8FAFC',
    marginBottom: '25px',
  },

  sectionTextLight: {
    textAlign: 'center',
    color: '#CBD5E1',
    fontSize: '17px',
    maxWidth: '800px',
    margin: '0 auto 50px',
    lineHeight: 1.6,
  },

  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },

  aboutCard: {
    backgroundColor: 'rgba(248,250,252,0.95)',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 15px 35px rgba(31, 30, 30, 0.25)',
  },

  aboutList: {
    marginTop: '15px',
    paddingLeft: '18px',
    color: '#334155',
  },

  //* FEATURES */
  featuresSection: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1562774053-701939374585")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '90px 60px',
  },

  featuresOverlay: {
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    padding: '70px',
    borderRadius: '24px',
  },

  sectionTitleLight2: {
    textAlign: 'center',
    fontSize: '30px',
    color: '#FFFFFF',
    marginBottom: '10px',
  },

  sectionSubtitle2: {
    textAlign: 'center',
    color: '#CBD5E1',
    maxWidth: '650px',
    margin: '0 auto 50px',
    fontSize: '17px',
  },

  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 up, 3 down
    gap: '30px',
  },

  featureCard: {
    backgroundColor: '#FFFFFF',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },

  featureIcon: {
    fontSize: '34px',
    display: 'inline-block',
    marginBottom: '15px',
  },

  /* STEPS */
  howItWorksSection: {
    padding: '80px 40px',
    backgroundImage:
      'linear-gradient(rgba(201,216,231,0.92), rgba(201, 216, 231, 0.92)), url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  sectionSubtitle: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 40px',
    color: '#64748B',
    fontSize: '16px',
  },

  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '30px',
  },

  step: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    padding: '35px 25px',
    borderRadius: '18px',
    textAlign: 'center',
    boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },

  stepBadge: {
    position: 'absolute',
    top: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#1E3A8A',
    color: '#FFFFFF',
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  stepIcon: {
    fontSize: '34px',
    marginBottom: '12px',
    display: 'block',
  },

  /* CTA */
  cta: {
    padding: '120px 25px',
    backgroundImage:
      'linear-gradient(rgba(103, 137, 179, 0.9), rgba(103, 137, 179, 0.9)), url("https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1600")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
  },

  ctaContent: {
    maxWidth: '700px',
    margin: '0 auto',
  },

  ctaTitle: {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#0F172A',
  },

  ctaText: {
    fontSize: '17px',
    lineHeight: '1.7',
    maxWidth: '600px',
    margin: '0 auto 35px',
    color: '#080808',
  },

  /* FOOTER */
  footer: {
    backgroundColor: '#0b1543',
    color: '#E5E7EB',
    textAlign: 'center',
    padding: '40px 20px',
  },

  footerMain: {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '6px',
  },

  footerSub: {
    fontSize: '12.5px',
    color: '#94A3B8',
    letterSpacing: '0.3px',
  },

  /* BUTTONS */
  primaryButton: {
    backgroundColor: '#1E3A8A',
    color: '#fff',
    border: 'none',
    padding: '12px 26px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  primaryButtonLarge: {
    backgroundColor: '#FFFFFF',
    color: '#1E3A8A',
    border: 'none',
    padding: '14px 32px',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#3B82F6',
    color: '#fff',
    border: 'none',
    padding: '12px 26px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
  },
};

export default WelcomePage;
