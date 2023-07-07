import {Autocomplete} from "@react-google-maps/api"
import { useState } from "react";
const Header = ({ setCoordinates }) => {
    const [autocomplete, setAutocomplete] = useState(null)
    const onLoad = (autoComplete) => setAutocomplete(autoComplete);

    const onplaceChange = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates(lat, lng)
    }
  return (
   <div className='header'>
        <div className='header_title'>Hotel Finder</div>
        <div className="search_hotel_location">
            <Autocomplete onLoad={onLoad} onPlaceChanged={onplaceChange}>
              <input type="text" placeholder='Explore hotels now' />
            </Autocomplete>
        </div>
   </div>
  )
}

export default Header