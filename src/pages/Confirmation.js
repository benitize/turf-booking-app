import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Confirmation() {
  const location = useLocation();
  const { turf, slot } = location.state || {};

  return (
    <div className="container">
      <div className="confirmation-card">
        <h1>Booking Confirmed!</h1>
        <p>Thank you for booking with us.</p>
        <p><strong>Turf:</strong> {turf.name}</p>
        <p><strong>Slot:</strong> {slot}</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </div>
  );
}

export default Confirmation;