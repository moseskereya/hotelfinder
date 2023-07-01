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
         },
         headers: {
            "X-RapidAPI-Key": "13aac9c6bcmsh25be358f6d5e3cdp18ef8bjsnfd1e0a3decc0" ,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    });
     return data;
 }
 
 catch (error) {
        console.log(error, 'There was an error when the request was made')
    }
}

