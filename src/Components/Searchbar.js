import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Dimensions, Linking } from 'react-native';
import { Searchbar, Appbar, Card, Title, Button, Paragraph, Colors } from 'react-native-paper';
import axios from 'axios'

export default function SearchComponent({navigation}) {

  const [searchQuery, setSearchQuery] = useState();
  const [data, setData] = useState();

  const Submit = async function () {''
    const result = await axios(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=f2d63157a72b41ac8e11d2da78bc0639`);
 
    const modifiedData = result.data
    setData(modifiedData.articles)

  };

  const _onChangeSearch = query => setSearchQuery(query);
  console.log(data)
  if(data == ''){
    return (
      <View>
      <Appbar.Header style={{ backgroundColor: '#b30000' }}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
        />
        <Searchbar
          placeholder="Search a food item"
          onChangeText={_onChangeSearch}
          style={styles.searchbar}
          value={searchQuery}
          onSubmitEditing={Submit}
        />
      </Appbar.Header>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text>No Data Found</Text>
      </View>
      </View>
      )
  }
 else{
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: '#b30000' }}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
        />
        <Searchbar
          placeholder="Enter your keyword"
          onChangeText={_onChangeSearch}
          style={styles.searchbar}
          value={searchQuery}
          onSubmitEditing={Submit}
        />
      </Appbar.Header>
      <ScrollView style={{ marginBottom: 60 }}>
        <FlatList
          data={data}
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

      </ScrollView>
    </View>
  );
}
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    searchbar: {
        width: (DEVICE_WIDTH) - 60
      },
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
 