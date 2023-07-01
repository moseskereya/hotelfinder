import  GoogleMapReact from 'google-map-react';
import { FaLocationArrow } from "react-icons/fa"

const Map = ({ setCoordinates, hotels, setBounds, coordinates }) => {
  const handleMapChange = (e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  };

   const renderMarkers = () => {
    return hotels?.map((hotel) => (
      <div
        key={hotel.location_id}
        lat={Number(hotel.latitude)}
        lng={Number(hotel.longitude)}
        className="marker"
      >
        <FaLocationArrow className="marker-icon" />
      </div>
    ));
  };

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
             {renderMarkers()}
      </GoogleMapReact>
    </div>
  );
};


export default Map;

