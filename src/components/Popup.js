import React from 'react';
import './Popup.css'

const Popup = ({ selectedHotel, onClose }) => {
    const renderRatingStars = () => {
        const rating = parseFloat(selectedHotel.rating); 
        const fullStars = Math.floor(rating); 
        const hasHalfStar = rating - fullStars >= 0.5;
        const fullStarsComponent = '⭐️'.repeat(fullStars);
        const halfStarComponent = hasHalfStar ? '⭐️' : '';
        return `${fullStarsComponent}${halfStarComponent}`;
 };

    const handlePhoneClick = () => {
        if (selectedHotel.phoneNumber) {
          window.location.href = `tel:${selectedHotel.phoneNumber}`;
        }
    };
    
  return (
    <div className='popup-container'>
    <div className="popup-content">
    <h3>{selectedHotel.name}</h3>
        <img src={selectedHotel.photo ? selectedHotel.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={selectedHotel.name} />
      {selectedHotel.rating && (
        <p>Rating: {selectedHotel.rating} {renderRatingStars()}</p>
      )}
      {selectedHotel.website && (
        <p>
          Website: <a href={selectedHotel.website} target="_blank" rel="noopener noreferrer">{selectedHotel.website}</a>
        </p>
      )}
        {selectedHotel.phoneNumber && (
          <p>
            Phone:{' '}
            <a href={`tel:${selectedHotel.phoneNumber}`} onClick={handlePhoneClick}>
              {selectedHotel.phoneNumber}
            </a>
          </p>
        )}
      <button onClick={onClose}>Close</button>
    </div>
    </div>
  
  );
};

export default Popup;