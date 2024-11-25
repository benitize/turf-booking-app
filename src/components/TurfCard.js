import './TurfCard.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function TurfCard({ turf }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking', { state: { turf } });
  };

  return (
    <div className="turf-card">
      <img src={turf.image} alt={`${turf.name} Image`} />
      <div className="turf-card-content">
        <h3>{turf.name}</h3>
        <p>Location: {turf.location}</p>
        <p>Price: ${turf.price}/hour</p>
        <button className="btn" onClick={handleBooking}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default TurfCard;

