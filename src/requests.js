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
          'X-RapidAPI-Key': '30b169ac58msh98b233cda79c9d8p13f6f8jsnbe4decfb2741',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    });
     return data;
 }
 
 catch (error) {
        console.log(error, 'There was an error when the request was made')
    }
}

