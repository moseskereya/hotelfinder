import axios from 'axios';
const url = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';
export const getHotels = async (sw, ne) => {
 try {
     const { data: { data } } = await axios.get(url, {
        params: {
            bl_latitude:sw.lat,
            tr_latitude:ne.lat,
            bl_longitude: sw.lng,
             tr_longitude: ne.lng,
            limit: '80',
         },
         headers: {
          'X-RapidAPI-Key': '8cede88ce1msh6fb70bdbad57c3fp1e5022jsn57e5da3ab6df',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    });
     return data;
 }
 
 catch (error) {
        console.log(error, 'There was an error when the request was made')
    }
}

