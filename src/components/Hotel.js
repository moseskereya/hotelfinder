import React from 'react'
import { FaLocationArrow} from "react-icons/fa"
import { FaClock } from "react-icons/fa"
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
                <FaLocationArrow color='red' fontSize={15}/> {hotel.location_string}
              </p>
                <p>
                  <FcRating fontSize={15}/> {Number(hotel.rating)}
                </p>
          </div>
            <div className='inner_content'>
                <p>
                  Price from  {hotel.price}
              </p>
              <p>
                 Level {hotel.price_level}
              </p>
          </div>
          <h6> Ranking  {hotel.ranking}</h6>
     </div>
  )
}

export default Hotel

