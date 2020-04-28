import axios from 'axios';
import { Alert } from 'react-native';

const url = 'https://newsapi.org/v2'
const apiKey = 'f2d63157a72b41ac8e11d2da78bc0639'
"http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f2d63157a72b41ac8e11d2da78bc0639"

export const fetchHeadlineswithCountry = async (country , category) => {
   let changeableUrl = `${url}/top-headlines?country=in&apiKey=${apiKey}`;
   if(country) {
     changeableUrl = `${url}/top-headlines?country=${country}&apiKey=${apiKey}`;
   }
   if(category) {
      changeableUrl = `${url}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
   }
   
    
   try{
      const data = await axios.get(changeableUrl);
      return data
   } catch (error) {
      if(error == 'Error: Network Error')
      Alert.alert('Network Problem')
      console.log(error)
   }
}
