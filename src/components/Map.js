import React, { useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import { FcRating} from "react-icons/fc"
import { FaLocationArrow } from "react-icons/fa"

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
  const { latitude, longitude, name } = hotel;
  return (
    <div
      key={hotel.location_id}
      lat={parseFloat(latitude)}
      lng={parseFloat(longitude)}
      className="marker-wrapper">
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
        zoom={15}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={{
            disableDefaultUI: true,
            gestureHandling: 'greedy',
           zoomControl: true,
                  draggable: true
              }} onChange={handleMapChange}>
        
        {selectedHotel && (
          <div lat={selectedHotel.latitude} lng={selectedHotel.longitude}>
            <div className="popup-card">
              <img src={selectedHotel.photo ? selectedHotel.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={selectedHotel.name} />
              <h3>{selectedHotel.name}</h3>
                 <div>
                    <FcRating fontSize={10} />
                    <FcRating fontSize={10}/>
                    <FcRating fontSize={10}/>
                    <FcRating fontSize={10}/>
                    <span>
                        {Number(selectedHotel.rating)}
                     </span>
                    <p>Hotel reviews {Number(selectedHotel.num_reviews)}</p>
                    <p>{selectedHotel.ranking}</p>
                              
                </div>            
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        )}
        
        {userLocation && (
          <div lat={userLocation.lat} lng={userLocation.lng}>
            <div className="user-location-dot"></div>
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

