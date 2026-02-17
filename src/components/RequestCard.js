const RequestCard = ({ request, onApprove, onReject, isAdmin }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
      <p><strong>Student:</strong> {request.name || localStorage.getItem('name') || 'You'}</p>
      <p><strong>Status:</strong> {request.status}</p>
      <p><strong>Date:</strong> {request.createdAt ? new Date(request.createdAt).toLocaleDateString() : 'N/A'}</p>
      {isAdmin && request.status === 'pending' && (
        <div>
          <button onClick={() => onApprove(request._id)}>Approve</button>
          <button onClick={() => onReject(request._id)}>Reject</button>
        </div>
      )}
    </div>
  );
};

export default RequestCard;