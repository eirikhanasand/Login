import { StatusBar } from 'expo-status-bar';
import { GS } from '../../styles/globalStyles';
import { MS } from '../../styles/menuStyles';
import React, { useState } from 'react';
import Card from '../../shared/card';
import { T } from '../../styles/text';
import { 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

{/* ========================= APP START ========================= */}

export default function TodoScreen({ navigation }) {
    const [setting] = useState([
      {id: '1', todo: 'Create small color rectangle SVGs for use in events'},
      {id: '2', todo: 'Logos for each comitee'},
      {id: '3', todo: 'Make top and bottom menu background invisible'},
      {id: '4', todo: 'Fix line breaking event text'},
      {id: '5', todo: 'Implement push notifications'},
      {id: '6', todo: 'Page to find our other social media'},
      {id: '7', todo: 'Add events you are enrolled to on homepage'},
      {id: '8', todo: 'Implement mazemap'},
      {id: '9', todo: 'Fix logo clipping (transfer png to svg)'},
  ])
{/* ========================= DISPLAY APP START ========================= */}
const eventPage = () => {
  navigation.navigate('EventScreen');
}
const homePage = () => {
  navigation.navigate('HomeScreen');
}
const listingPage = () => {
  navigation.navigate('ListingScreen');
}
const profilePage = () => {
  navigation.navigate('ProfileScreen');
}
const goBack = () => {
  navigation.goBack()
}

  return(
    <View>
      <StatusBar style="light" />
{/* ========================= DISPLAY TOP MENU ========================= */}
  <View style={MS.topMenu}>
    <TouchableOpacity onPress={() => goBack()}>
      <Image style={MS.goBack} source={require('../../assets/goback777.png')} />
    </TouchableOpacity>

    <Text style={MS.screenTitle}>    Gjøremål</Text>
    
      <TouchableOpacity onPress={() => profilePage()}>
        <Image style={MS.tMenuIcon} source={require('../../assets/loginperson-orange.png')} />
      </TouchableOpacity>
  </View>
{/* ========================= DISPLAY CONTENT ========================= */}
      <View style={GS.content}>
          <FlatList showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={(item) => item.id}
          data={setting}
          renderItem={({item}) => (
            <View>
              <Card>
                <Text style={T.text15}>{item.id}. {item.todo}</Text>
              </Card>
          </View>
          )}
          />
      </View>    

{/* ========================= DISPLAY BOTTOM MENU ========================= */}
      <View style={MS.bMenu}>
          <TouchableOpacity onPress={() => homePage()}>
            <Image style={MS.bMenuIcon} source={require('../../assets/house777.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => eventPage()}>
            <Image style={MS.bMenuIcon} source={require('../../assets/calendar777.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => listingPage()}>
            <Image style={MS.bMenuIcon} source={require('../../assets/business.png')} />
          </TouchableOpacity>
      </View>   
    </View>
    
  )
};