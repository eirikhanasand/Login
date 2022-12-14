//
// SCREEN DEPRECATED, FUNCTIONALITY MOVED TO NOTIFICATIONMANAGER.JS
//
import { MS } from '../../styles/menuStyles';
import { GS } from '../../styles/globalStyles';
import React, { useState, useEffect, useRef } from 'react';
import { NotifyButton, Space } from '../../shared/sharedComponents';
import { DynamicCircle } from '../../shared/eventComponents/otherComponents';
import { T } from '../../styles/text';
import { useSelector } from 'react-redux';
import FetchColor from '../../styles/fetchTheme';
import { BlurView } from 'expo-blur';
import { 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';
{/* ========================= APP START ========================= */}
global.nTitle = "Login 💻"       // not being used, use array instead
global.nBody = "Varsling"       // not being used, use array instead
global.nDelay = 1               // not being used, use array instead

export default function MakeNotificationScreen({ navigation }) {

  const { lang  } = useSelector( (state) => state.lang  )
  const { login } = useSelector( (state) => state.login )
  const { theme } = useSelector( (state) => state.theme )

  const eventPage   = () => { navigation.navigate('EventScreen')    }
  const menuPage    = () => { navigation.navigate('MenuScreen')     }              // Function to navigate to menu
  const goBack      = () => { navigation.navigate('InternalScreen') }
  const listingPage = () => { navigation.navigate('ListingScreen')  }

// const [expoPushToken, setExpoPushToken] = useState('');
// const [notification, setNotification] = useState(false);
// const notificationListener = useRef();
// const responseListener = useRef();

// --- THIS SECTION IS FOR WHEN THIS SCREEN IS REVISITIED --- 
// const [comittee, selectComittee] = useState({
//   selected: 0
// }) 

// const selectedComittee = (val) => {
//   selectComittee({
//     ...comittee,
//     selected: val,
//   });
// }
//
// const [filter, setFilter] = useState({input: null});                //  Filter text input declaration
//   const textInputRef = useRef(null);                                  //  Clears text input
//   const filterInput = (val) => {                                      //  --- UPDATES FILTER TEXT INPUT ---
//       setFilter({ 
//       ...filter,
//       input: val,
//       });
//   }
//  ref={textInputRef}
//  maxLength={40}
//  onPress={() => filterInput(null) + setRenderedArray([...events]) + setClickedCategory([]) + textInputRef.current.clear()}
// --- THIS SECTION IS FOR WHEN THIS SCREEN IS REVISITIED --- 

// useEffect(() => {
//   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

//   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//     setNotification(notification);
//   });

//   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//     console.log(response);
//   });

//   setNotificationHandlerAsync();

//   return () => {
//     Notifications.removeNotificationSubscription(notificationListener.current);
//     Notifications.removeNotificationSubscription(responseListener.current);
//   };
// }, []);

  return(
    <View>
    {/* ========================= DISPLAY CONTENT ========================= */}
    <View style={{...GS.content, backgroundColor: FetchColor(theme, 'BACKGROUND')}}>
    <ScrollView showsVerticalScrollIndicator={false}>

      {Space((Dimensions.get('window').height/7.5)+50)}

      <Text style={{...T.centered, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'Send varsling' : 'Send push notification'}</Text>{Space(10)}

      {Space(15)}

      <Text style={{...T.centered20, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'Tittel' : 'Title'}</Text>

      {Space(15)}

      <TextInput 
        style={{...GS.inputText, backgroundColor: FetchColor(theme, 'DARKER'), color: FetchColor(theme, 'TEXTCOLOR')}}
        placeholder='Login'
        placeholderTextColor={FetchColor(theme, 'TITLETEXTCOLOR')}
        textAlign='center'
        onChangeText={(val) => nTitle = (val)}
      />
      {Space(15)}

      <Text style={{...T.centered20, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'Beskrivelse' : 'Description'}</Text>
      
      {Space(15)}

      <TextInput 
        multiline
        style={{...GS.inputText, backgroundColor: FetchColor(theme, 'DARKER'), color: FetchColor(theme, 'TEXTCOLOR')}}
        placeholder='Varsling'
        placeholderTextColor={FetchColor(theme, 'TITLETEXTCOLOR')}
        textAlign='center'
        onChangeText={(val) => nBody = (val)}
      />

      {Space(15)}

      <Text style={{...T.centered20, color: FetchColor(theme, 'TEXTCOLOR')}}>Delay ({lang ? 'Sekunder': 'Seconds'})</Text>

      {Space(15)}

      <TextInput 
        style={{...GS.inputText, backgroundColor: FetchColor(theme, 'DARKER'), color: FetchColor(theme, 'TEXTCOLOR')}}
        keyboardType='numeric'
        placeholder='1'
        placeholderTextColor={FetchColor(theme, 'TITLETEXTCOLOR')}
        textAlign='center'
        onChangeText={(val) => nDelay = (val)}
      />

      {Space(15)}

      {/* onPress={async () => {await schedulePushNotification();}} */}
      <TouchableOpacity> 
        <NotifyButton>
          <Text style={{...T.centered20, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'SEND VARSLING' : 'SEND NOTIFICATION'}</Text>
        </NotifyButton>
      </TouchableOpacity>

      <View>
        {Space(15)}
        <Image style={GS.smallImage} source={require('../../assets/loginText.png')} />
      </View>

      {Space(15)}
      {Space(Dimensions.get('window').height/10)}
    </ScrollView>
  </View>    

 {/* ========================= DISPLAY TOP MENU ========================= */}
 {Platform.OS === 'ios' ? <BlurView style={MS.topMenu} intensity={30}/> : <View style={{...MS.topMenu, backgroundColor: FetchColor(theme, 'TRANSPARENTANDROID')}}/>}
      <View style={{...MS.topMenu, backgroundColor: FetchColor(theme, 'TRANSPARENT')}}>
          <TouchableOpacity onPress={() => goBack()}>
            <Image style={MS.goBack} source={require('../../assets/goback777.png')} />
          </TouchableOpacity>

          <View style={GS.loginStatus}>{login ? DynamicCircle(10,10,'red',0,0,60,0):null}</View>

          <Text style={{... MS.screenTitle, color: FetchColor(theme, 'TITLETEXTCOLOR')}}>{lang ? 'Send Varsling' : 'Send Push'}</Text>
        </View>

{/* ========================= DISPLAY BOTTOM MENU ========================= */}
{Platform.OS === 'ios' ? <BlurView style={MS.bMenu} intensity={30}/> : <View style={{...MS.bMenu, backgroundColor: FetchColor(theme, 'TRANSPARENTANDROID')}}/>}
    <View style={{...MS.bMenu, backgroundColor: FetchColor(theme, 'DARKER')}}>
      <TouchableOpacity onPress={() => eventPage()}>
      <Image style={MS.bMenuIcon} source={theme == 0 || theme == 2 || theme == 3 ? require('../../assets/calendar777.png') : require('../../assets/calendar-black.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => listingPage()}>
      <Image style={MS.bMenuIcon} source={theme == 0 || theme == 2 || theme == 3 ? require('../../assets/business.png') : require('../../assets/business-black.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => menuPage()}>
        <Image style={MS.bMenuIcon} source={require('../../assets/menu-orange.png')} />
      </TouchableOpacity>
      </View>     
    </View>
    
  )
};


// async function schedulePushNotification() {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: nTitle,
//       body: nBody,
//       data: { data: 'goes here' },
//     },
//     trigger: { seconds: nDelay }, // doesnt work
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === 'android') {
//     await Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   const { status: existingStatus } = await Notifications.getPermissionsAsync();
//   let finalStatus = existingStatus;
//   if (existingStatus !== 'granted') {
//     const { status } = await Notifications.requestPermissionsAsync();
//     finalStatus = status;
//   }
//   if (finalStatus !== 'granted') {
//     alert('Failed to get push token for push notification!');
//     return;
//   }
//   token = (await Notifications.getExpoPushTokenAsync()).data;
//   console.log(token);

//   return token;
// }