
// src/EventCard.jsx
import React, { useState } from 'react';

const EventCard = ({ image, title, description, location, date, time }) => {
  const [isInterested, setIsInterested] = useState(false);

  const handleInterestClick = () => {
    setIsInterested(!isInterested);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-teal-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="mb-4 text-gray-700">
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
      </div>
      <button
        onClick={handleInterestClick}
        className={`w-full mt-2 py-2 rounded-full font-semibold text-white transition-all ${
          isInterested ? 'bg-red-500' : 'bg-teal-600'
        }`}
      >
        {isInterested ? 'Not Interested' : 'Interested'}
      </button>
      <p className="text-sm text-gray-500 mt-2">
        {isInterested && 'You marked as interested in this event'}
      </p>
    </div>
  );
};

export default EventCard;
