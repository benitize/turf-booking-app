import './BookingSlot.css';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingSlot() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState('');
  const turf = location.state?.turf || { name: 'Turf 1' };

  const timeSlots = [
    '6-7 AM', '7-8 AM', '8-9 AM', '9-10 AM', '10-11 AM',
    '11-12 PM', '12-1 PM', '1-2 PM', '2-3 PM', '3-4 PM',
    '4-5 PM', '5-6 PM', '6-7 PM', '7-8 PM', '8-9 PM', '9-10 PM',
  ];

  const handleBooking = () => {
    navigate('/confirmation', { state: { turf, slot: selectedSlot } });
  };

  return (
    <div className="container">
      <h1>Book a Slot</h1>
      <p>Select a slot for {turf.name}</p>
      <div className="slots">
        {timeSlots.map((slot) => (
          <div
            key={slot}
            className={`slot ${selectedSlot === slot ? 'selected' : ''}`}
            onClick={() => setSelectedSlot(slot)}
          >
            {slot}
          </div>
        ))}
      </div>
      <button className="btn" onClick={handleBooking} disabled={!selectedSlot}>
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingSlot;
