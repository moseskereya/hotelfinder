import { useEffect, useState } from 'react'
import Map from "./components/Map"
import Header from "./components/header"
import './App.css';
import List from "./components/List";
import { getHotels } from '../src/requests'

function App() {
    const [hotels, setHotels] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState(null);
    
    useEffect(() => {
        if (bounds) {
         getHotels(bounds.sw, bounds.ne)
            .then((response) => {
            console.log(response)
             setHotels(response)
        }) 
        }
    }, [coordinates, bounds]) 

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) =>
            setCoordinates({ lat: latitude, lng: longitude }))
    }, []);

    return (
    <>
        <Header />
        <div className="app_container">
            <List hotels={hotels}/>
                <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                hotels={hotels}
                />
        </div>
       </>
  );
}

export default App;
