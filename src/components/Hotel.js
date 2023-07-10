import React from 'react'
import { FcRating } from "react-icons/fc"

const Hotel = ({ hotel }) => {
    return (
    <div className="container">
       <div key={hotel.id} className="hotels-container">     
         <img src={hotel.photo ? hotel.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={ hotel.name} />
                    <div className="hotel_content">
                        <div  className='rating'>
                        <FcRating fontSize={10} />
                        <FcRating fontSize={10}/>
                        <FcRating fontSize={10}/>
                        <FcRating fontSize={10}/>
                            <span>
                               {Number(hotel.rating)}
                            </span>
                        </div>
                    <div className='hotel_title'>
                           <h4>{hotel.name}</h4>
                     </div>
                       <div className='location'>
                          <p> {Number(hotel.num_reviews)} reviews</p>
                        </div>
                </div>
         </div>
     </div>
  )
}

export default Hotel




