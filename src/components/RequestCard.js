const RequestCard = ({ request, onApprove, onReject, isAdmin }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
      <p><strong>Student:</strong> {request.name || 'You'}</p>
      <p><strong>Status:</strong> {request.status}</p>
      <p><strong>Date:</strong> {new Date(request.request_date).toLocaleString()}</p>
      {isAdmin && request.status === 'Pending' && (
        <div>
          <button onClick={() => onApprove(request.id)}>Approve</button>
          <button onClick={() => onReject(request.id)}>Reject</button>
        </div>
      )}
    </div>
  );
};

export default RequestCard;
