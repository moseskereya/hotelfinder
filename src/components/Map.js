import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
const Map = ({ setCoordinates, hotels, setBounds, coordinates }) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's current location using browser geolocation API
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
   console.log('Clicked hotel:', hotel);
};
    
  const markers = hotels?.map((hotel) => {
  const { latitude, longitude, name } = hotel;
  return (
    <div
      key={hotel.location_id}
      lat={parseFloat(latitude)}
      lng={parseFloat(longitude)}
      className="marker-wrapper"
    >
      <div className="marker-label" onClick={() => handleMarkerClick(hotel)}>
        {name}
      </div>
    </div>
  );
});


  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCMlhEtuBkewUOBU5bRiQEIQiUaeo3DJII' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          draggable: true
        }} onChange={handleMapChange}>
             {userLocation && (
          <div lat={userLocation.lat} lng={userLocation.lng}>
            <div className="user-location-dot"></div>
          </div>
        )}
        {markers}
      </GoogleMapReact>
    </div>
  );
};


export default Map;

