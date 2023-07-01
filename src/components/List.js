import React from 'react'
import Hotel from "./Hotel"
import spinner from './spinner.gif';
const List = ({ hotels }) => {
        if (hotels === undefined  || hotels.length === 0) {
     return (
        <div className="spinner">
            <img
                src={spinner}
                alt="Loading..."
            />
        </div>
   );
    } else {
      return (
        <div>
         <div className='search_hotel'>
            <input type="text" placeholder='search yuor hotel'/>
              </div>
          <div className='hotels_list'>
         {hotels?.map((hotel, index) => (
           <Hotel key={index} hotel={hotel} />
         ))}
        </div>
                  
      </div>

  )
    }
}

export default List