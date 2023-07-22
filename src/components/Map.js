import React, { useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import { FaLocationArrow } from "react-icons/fa"
import {HiLocationMarker} from "react-icons/hi"
import {BiCurrentLocation} from "react-icons/bi"

const Map = ({ setCoordinates, hotels, setBounds, coordinates }) => {
    const [userLocation, setUserLocation] = useState(null);
    const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, []);
    
  const handleMapChange = (e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
    };
    
    const handleMarkerClick = (hotel) => {
        setSelectedHotel(hotel);
    };
    
     const handleClosePopup = () => {
    setSelectedHotel(null);
  };

 const handleGoBackHome = () => {
    if (userLocation) {
      setCoordinates({ lat: userLocation.lat, lng: userLocation.lng });
      setBounds(null);
    }
  };

  const markers = hotels?.map((hotel) => {
  const { latitude, longitude} = hotel;
  return (
    <HiLocationMarker
    key={hotel.location_id}
    lat={parseFloat(latitude)}
    lng={parseFloat(longitude)}
    onClick={() => handleMarkerClick(hotel)}
    color='red'
    fontSize={25}
    />
  );
});

    const renderRatingStars = () => {
        const rating = parseFloat(selectedHotel.rating); 
        const fullStars = Math.floor(rating); 
        const hasHalfStar = rating - fullStars >= 0.5;
        const fullStarsComponent = '⭐️'.repeat(fullStars);
        const halfStarComponent = hasHalfStar ? '⭐️' : '';
      return `${fullStarsComponent}${halfStarComponent}`;
    };

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEYS }}
        defaultCenter={coordinates}
        zoom={16}
        center={coordinates}
        defaultZoom={16}
        margin={[50, 50, 50, 50]}
        options={{
            disableDefaultUI: true,
            gestureHandling: 'greedy',
            zoomControl: true,
            draggable: true
            }}
              onChange={handleMapChange}>
        
            {selectedHotel && (
              <div lat={selectedHotel.latitude} lng={selectedHotel.longitude} className='popup-container'>
                <div className="popup-content">
                  <img src={selectedHotel.photo ? selectedHotel.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={selectedHotel.name} />
                  <h3>{selectedHotel.name}</h3>
                  <p>Rating: {selectedHotel.rating} {renderRatingStars()}</p>
                  <p>Hotel reviews {Number(selectedHotel.num_reviews)}</p>
                  <button onClick={handleClosePopup}>Close</button>
                 </div>
              </div>
            )}
            {userLocation && (
              <div lat={userLocation.lat} lng={userLocation.lng}>
                <div>
                  <BiCurrentLocation color='blue'/>
                </div>
              </div>
            )}
      {markers}
        </GoogleMapReact>
         <div className="go-back-home" onClick={handleGoBackHome}>
        <FaLocationArrow color='red' />
          </div>
    </div>
  );
};


export default Map;
