import { useState, useEffect, useRef } from 'react';
import { submitRequest, getRequestStatus } from '../services/api';
import RequestCard from './RequestCard';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const [request, setRequest] = useState(null);
  const navigate = useNavigate();
  const requestRef = useRef(null);

  const fetchRequest = async () => {
    try {
      const { data } = await getRequestStatus();
      setRequest(data.requests?.[0] || null);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Fetch immediately
    fetchRequest();

    // Poll every 5 seconds to get live updates
    const interval = setInterval(fetchRequest, 5000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    try {
      await submitRequest();
      fetchRequest();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Error submitting request');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const scrollToRequest = () => {
    requestRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Student Panel</h2>

        <button style={styles.sidebarButton} onClick={() => navigate('/')}>
          Home
        </button>

        <button style={styles.sidebarButton} onClick={scrollToRequest}>
          My Request
        </button>

        <button style={styles.sidebarButton} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.main}>
        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.pageTitle}>Student Dashboard</h1>
          <span style={styles.greeting}>Hi, Student!</span>
        </div>

        {/* STATUS CARD */}
        <div style={styles.statsGrid}>
          <div style={{ ...styles.statCard, borderLeft: '6px solid #1E3A8A' }}>
            <h3>Request Status</h3>
            <p>{request ? request.status : 'Not Submitted'}</p>
          </div>
        </div>

        {/* REQUEST SECTION */}
        <div ref={requestRef} style={styles.section}>
          <h2 style={styles.sectionTitle}>Hostel Allocation Request</h2>

          {request ? (
            <RequestCard request={request} />
          ) : (
            <div style={styles.emptyBox}>
              <p style={styles.emptyText}>
                You have not submitted any hostel request yet.
              </p>
              <button style={styles.submitButton} onClick={handleSubmit}>
                Submit Hostel Request
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', minHeight: '100vh', backgroundColor: '#F4F6F9' },
  sidebar: {
    width: '220px',
    backgroundColor: '#cad6f6',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  sidebarTitle: { fontSize: '22px', marginBottom: '20px' },
  sidebarButton: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: '#6c8fdb',
    color: '#fff',
    fontWeight: 'bold',
  },
  main: { flex: 1, padding: '25px 50px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' },
  pageTitle: { fontSize: '28px', color: '#1E3A8A' },
  greeting: { fontSize: '16px', color: '#374151' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' },
  statCard: { backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 6px 15px rgba(0,0,0,0.08)' },
  section: { backgroundColor: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 8px 18px rgba(0,0,0,0.08)' },
  sectionTitle: { marginBottom: '20px', fontSize: '22px', color: '#111827' },
  emptyBox: { textAlign: 'center', padding: '30px' },
  emptyText: { marginBottom: '20px', color: '#6B7280' },
  submitButton: { backgroundColor: '#1E3A8A', color: '#fff', padding: '12px 25px', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer' },
};

export default StudentDashboard;
