import React from 'react'
import { StyleSheet, Text, View, FlatList, Linking, StatusBar} from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { fetchHeadlineswithCountry } from '../Api/index'

import SelectCountry from './SelectCountry';

export default class MoreNews extends React.Component {

  state = {
    data: {},
    country:'',
    category: ''

 }

async componentDidMount(){
   const fetchedData = await (await fetchHeadlineswithCountry()).data
    this.setState({data: fetchedData})
 }

  handleChange = async ( country, category) => {
    const fetchedData = await (await fetchHeadlineswithCountry(country , category)).data
    this.setState({data: fetchedData, country: country, category: category})
  }

  render(){
    const data = this.state.data
  return (
    <View >
    <StatusBar backgroundColor="#b30000" barStyle='light-content'/>
    <SelectCountry handleChange={this.handleChange}/>
      <View style={{marginBottom:50}}>
        <FlatList
          data={data.articles}
          style={{marginBottom:170}}
          renderItem={({ item }) =>
            <View>
              <Card style={styles.card}>
                <Card.Title title={item.source.name} />
                <Card.Content>
                  {(item.author) === null ? null : <Title>Author: {item.author}</Title>}
                  <Text style={styles.title}>{item.title}</Text>
                </Card.Content>
                <Card.Cover source={{ uri: (item.urlToImage) }} />
                <Card.Content>
                  <Paragraph>{item.description}</Paragraph>
                  <Text style={styles.ptxt}>published date: {item.publishedAt}</Text>
                </Card.Content>
                <Card.Actions>
                  <Button  onPress={() => Linking.openURL(item.url)}>
                    <Text style={styles.btntxt}>Know More</Text>
                  </Button>
                </Card.Actions>
              </Card>
            </View>
            
          }
        />
      </View>
    </View>
  )
}
}


const styles = StyleSheet.create({
   card:{
     margin:5
   },
   title:{
     fontSize:18,
     padding:10
   },
   ptxt:{
    color:'grey'
   },
   btntxt:{
    color: '#b30000'
   }
})
