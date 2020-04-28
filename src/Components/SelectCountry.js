import React,{ useState } from 'react';
import { View , StyleSheet} from 'react-native';
import { Appbar} from 'react-native-paper';
import CountryPicker from 'react-native-country-picker-modal'
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from './Button';

export default function SelectCountry({ handleChange  }) {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('IN')
  const [country, setCountry] = useState(null)
  const [withCountryNameButton, setWithCountryNameButton] = useState(
    false,
  )
  const [withFlag, setWithFlag] = useState(true)
  const [withEmoji, setWithEmoji] = useState(true)
  const [withFilter, setWithFilter] = useState(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState(false)
  const [withCallingCode, setWithCallingCode] = useState(false)
 
  const onSelect = (country) => {
    setCountryCode(country.cca2)
    handleChange(country.cca2 == null ? 'in' : country.cca2)
    setCountry(country)
  }
console.log(countryCode)


  return (
    <View>
        <Appbar.Header style={{ backgroundColor: '#b30000' }}>
        <Appbar.Content title="News App" />
        <Appbar.Action icon="magnify" onPress={() => navigation.navigate('Searchbar')} />
        <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
        }}/>
    
      </Appbar.Header>
      <ButtonComponent handleChange={handleChange} countryCode={countryCode}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 20,
  },
});

