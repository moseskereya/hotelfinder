import React from 'react'
import { FaLocationArrow} from "react-icons/fa"
import { FaDollarSign } from "react-icons/fa"
import { FcRating } from "react-icons/fc"
import {FcPhone} from "react-icons/fc"


const Hotel = ({hotel}) => {
  return (
      <div className='hotel_container'>
        <div className='header_content'>
         <div className='hotel_header'>
              <h4>{hotel.name}</h4>
          </div>
          <div className='hotel_content'>
            <img src={hotel.photo ? hotel.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={ hotel.name} />
          </div>
          </div>
          <div className='inner_content'>
              <p>
                <FaLocationArrow/> {hotel.location_string}
              </p>
                <p>
                  <FcRating/> {Number(hotel.num_reviews)}
                </p>
          </div>
            <div className='inner_content'>
                <p>
                  <FaDollarSign /> {hotel.price}
              </p>
              <p>
                 <FcPhone size={18}/> {hotel.phone}
              </p>
             </div>
     </div>
  )
}

export default Hotel

