import { useState, useEffect, useRef } from 'react';
import { getAllRequests, approveRequest, rejectRequest } from '../services/api';
import RequestCard from './RequestCard';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Refs for scrolling
  const allocationRef = useRef(null);
  const studentsRef = useRef(null);

  // Fetch all requests from backend
  const fetchRequests = async () => {
    try {
      const { data } = await getAllRequests();

      // Normalize the data
      const normalized = data.map(r => ({
        id: r._id || r.request_id,
        name: r.student_name || r.name,
        email: r.student_email || r.email,
        status: r.status.charAt(0).toUpperCase() + r.status.slice(1),
        request_date: r.request_date,
      }));

      setRequests(normalized);

      // Populate students table
      setStudents(normalized.map(r => ({
        id: r.id,
        name: r.name,
        email: r.email,
        status: r.status,
      })));
    } catch (err) {
      console.error('Error fetching requests:', err);
    }
  };

  // Approve a request
  const handleApprove = async (id) => {
    try {
      await approveRequest(id);
      // Update state locally to avoid full refresh
      setRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'approved' } : r));
      setStudents(prev => prev.map(s => s.id === id ? { ...s, status: 'approved' } : s));
    } catch (err) {
      console.error('Error approving request:', err);
    }
  };

  // Reject a request
  const handleReject = async (id) => {
    try {
      await rejectRequest(id);
      setRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'rejected' } : r));
      setStudents(prev => prev.map(s => s.id === id ? { ...s, status: 'rejected' } : s));
    } catch (err) {
      console.error('Error rejecting request:', err);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    fetchRequests();

    const interval = setInterval(fetchRequests, 10000); // Optional live refresh
    return () => clearInterval(interval);
  }, []);

  // Compute stats
  const total = requests.length;
  const approved = requests.filter(r => r.status === 'approved').length;
  const rejected = requests.filter(r => r.status === 'rejected').length;
  const pending = requests.filter(r => r.status === 'pending').length;

  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Admin Panel</h2>
        <button style={styles.sidebarButton} onClick={() => navigate('/')}>Home</button>
        <button style={styles.sidebarButton} onClick={() => scrollToSection(allocationRef)}>Allocation Requests</button>
        <button style={styles.sidebarButton} onClick={() => scrollToSection(studentsRef)}>Manage Students</button>
        <button style={styles.sidebarButton} onClick={handleLogout}>Logout</button>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.main}>
        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.pageTitle}>Admin Dashboard</h1>
          <span style={styles.greeting}>Hi, Admin!</span>
        </div>

        {/* STATS */}
        <div style={styles.statsGrid}>
          <div style={{ ...styles.statCard, borderLeft: '6px solid #1E3A8A' }}>
            <h3>Total Requests</h3>
            <p>{total}</p>
          </div>
          <div style={{ ...styles.statCard, borderLeft: '6px solid #16A34A' }}>
            <h3>Approved</h3>
            <p>{approved}</p>
          </div>
          <div style={{ ...styles.statCard, borderLeft: '6px solid #DC2626' }}>
            <h3>Rejected</h3>
            <p>{rejected}</p>
          </div>
          <div style={{ ...styles.statCard, borderLeft: '6px solid #F59E0B' }}>
            <h3>Pending</h3>
            <p>{pending}</p>
          </div>
        </div>

        {/* ALLOCATION REQUESTS */}
        <div ref={allocationRef} style={styles.section}>
          <h2 style={styles.sectionTitle}>Allocation Requests</h2>
          {requests.length === 0 ? (
            <p style={styles.empty}>No allocation requests found.</p>
          ) : (
            <div style={styles.requestGrid}>
              {requests.map(req => (
                <RequestCard
                  key={req.id}
                  request={req}
                  onApprove={handleApprove}
                  onReject={handleReject}
                  isAdmin={true}
                />
              ))}
            </div>
          )}
        </div>

        {/* STUDENTS TABLE */}
        <div ref={studentsRef} style={styles.section}>
          <h2 style={styles.sectionTitle}>Students Info</h2>
          {students.length === 0 ? (
            <p style={styles.empty}>No students found.</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map(s => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.email}</td>
                    <td>{s.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', minHeight: '100vh', backgroundColor: '#F4F6F9' },
  sidebar: { width: '220px', backgroundColor: '#cad6f6', color: '#000', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' },
  sidebarTitle: { fontSize: '22px', marginBottom: '20px' },
  sidebarButton: { padding: '10px 15px', border: 'none', borderRadius: '6px', cursor: 'pointer', backgroundColor: '#6c8fdb', color: '#f1f0f0', fontWeight: 'bold' },
  main: { flex: 1, padding: '25px 50px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' },
  pageTitle: { fontSize: '28px', color: '#1E3A8A' },
  greeting: { fontSize: '16px', color: '#374151' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' },
  statCard: { backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 6px 15px rgba(0,0,0,0.08)' },
  section: { backgroundColor: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 8px 18px rgba(0,0,0,0.08)', marginBottom: '30px' },
  sectionTitle: { marginBottom: '20px', fontSize: '22px', color: '#111827' },
  requestGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' },
  table: { 
  width: '100%', 
  borderCollapse: 'collapse', 
  textAlign: 'left', // aligns all text to left
},
th: {
  padding: '10px 15px',
  backgroundColor: '#f1f5f9',
  borderBottom: '2px solid #ccc',
  fontWeight: 'bold',
},
td: {
  padding: '10px 15px',
  borderBottom: '1px solid #e5e7eb',
},
  empty: { color: '#6B7280', fontStyle: 'italic' },
};

export default AdminDashboard;
