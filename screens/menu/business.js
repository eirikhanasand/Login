import React from 'react';                                                      // React
import { GS } from '../../styles/globalStyles';                                 // Global styles 
import { T } from '../../styles/text';                                          // Text styles 
import { MS } from '../../styles/menuStyles';                                   // Menu styles
import Card, { Kontakt, Space, Line } from '../../shared/sharedComponents';     // Various self made components 
import { DynamicCircle } from '../../shared/eventComponents/otherComponents';   // Event components
import { useSelector } from 'react-redux';                                      // Redux
import FetchColor from '../../styles/fetchTheme';                               // Color fetcher
import { BlurView } from 'expo-blur';                                           // Blur effect
import {      
  Text,                                                                         // Text component
  View,                                                                         // View component
  Image,                                                                        // Image component
  ScrollView,                                                                   // Scrollable view
  TouchableOpacity,                                                             // Toucable opacity (like a custom button)
  Dimensions,                                                                   // Screen size
  Platform
} from 'react-native';

export default function BusinessScreen( { navigation }) {                       // Declaring the screen

  const { lang  } = useSelector( (state) => state.lang  )                       // Language state
  const { login } = useSelector( (state) => state.login )                       // Login status
  const { theme } = useSelector( (state) => state.theme )                       // Theme state

  const eventPage   = () => { navigation.navigate('EventScreen')    }           // Function to navigate to eventscreen
  const listingPage = () => { navigation.navigate('ListingScreen')  }           // Function to navigate to job advertisements
  const menuPage    = () => { navigation.navigate('MenuScreen')     }           // Function to navigate to menu

  return(
    <View>
{/* ========================= DISPLAY CONTENT ========================= */}
  <View style={{...GS.content, backgroundColor: FetchColor(theme, 'BACKGROUND')}}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        {Space(Dimensions.get('window').height/7.5)}
          <Card>
            <Text style={{...T.bold40, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'For bedrifter' : 'For companies'}</Text>{Space(5)}

            {Space(10)}

            <View style={GS.row}>
              <Text>{Line(60,5)}</Text>
              <View>
              <Text style={{...T.boldWithLine, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'Er din bedrift p?? utskikk etter skarpe IT-studenter? Sjekk ut alt vi har ?? tilby din bedrift.': 'Is your company looking for sharp IT students? Check out everything we have to offer your company.'}</Text>
              </View>
            </View>
            {Space(10)}
            
            <View>
              <View style={GS.row}>
                <Image style={GS.medium} source={theme == 0 || theme == 2 || theme == 3 ? require('../../assets/bedpres-white.png') : require('../../assets/bedpres-black.png')} />
                <Text style={{...T.bold28, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'Bedpres' : 'Company presentation'}</Text>
              </View>
              <Text style={{...T.paragraph, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'Login sin PR komite arrangerer bedriftspresentasjoner hvor bedriften din f??r mulighet til ?? presentere til studentene hva dere jobber med, hvilke tjenester dere tilbyr, hvordan dere jobber osv. P?? denne m??ten blir studentene bevisst p?? hva dere tilbyr, og ikke minst arbeidsmilj??et deres. Vi tilbyr tilrettelegging for matservering (Pizza) under presentasjonen, men det er mest vanlig ?? rusle ned til en restaurant i byen for bespisning og mingling mellom studenter og bedriftsrepresentanter.': "Login's PR committee organizes company presentations where your company gets the opportunity to present to the students what you work on, what services you offer, how you work, etc. With this the students become aware of what you offer, and your working environment. We offer arrangements for food service (pizza) during the presentation, but it is most common to stroll down to a restaurant in town for dining and mingling between students and company representatives."}</Text>
              {Space(25)}
            </View>

            <View>
              <View style={GS.row}>
                <Image style={GS.medium} source={theme == 0 || theme == 2 || theme == 3 ? require('../../assets/pr-white.png') : require('../../assets/pr-black.png')} />
                <Text style={{...T.bold28, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'Cyberdagene' : 'Cyberdays'}</Text>
              </View>
              <Text style={{...T.paragraph, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'Cyberdagene er v??r karrieredag! Den arrangeres en gang per semester, og er en super arena for ?? rekruttere og promotere seg selv mot studentene v??re. Her blir det mulighet til ?? ta en prat med studenter, markedsf??re dere, og ikke minst annonsere sommerjobber til ivrige studenter! Bedriften f??r en stand og bestemmer selv hva dere ??nsker ?? gjennomf??re under selve karrieredagen. Her tilrettelegger vi ogs?? for speed intervjuer dersom det er ??nskelig. P?? kvelden blir det lagt opp for mingling med studenter p?? Huset med en pils og noe mat.' : 'The cyber days are our career day! It is organized once per semester and is a great arena for recruiting and promoting yourself to our students. Here you will have the opportunity to have a chat with students, market yourself, and not least advertise summer jobs to eager students! The company gets a stand and decides for itself what you want to carry out during the career day itself. Here we also arrange for speed interviews if desired. In the evening, arrangements are made for mingling with students at Huset with a beer and some food.'}</Text>
              {Space(25)}
            </View>

            <View>
              <View style={GS.row}>
                <Image style={GS.medium} source={theme == 0 || theme == 2 || theme == 3 ? require('../../assets/ctfkom-white.png') : require('../../assets/ctfkom-black.png')} />
                <Text style={{...T.bold28, color: FetchColor(theme, 'TEXTCOLOR')}}>CTF</Text>
              </View>
              <Text style={{...T.paragraph, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? "Capture the Flag er en perfekt arena for ?? b??de bli kjent med, og ?? utvikle studentene sine info-sec ferdigheter. Her kan dere som bedrift utfordre studentene v??re til ?? l??se oppgaver sammen! Vi oppfordrer til at dere har en egenlaget CTF som studentene kan leke seg med. Etter selve CTF'en er det vanlig ?? ta med alle deltagerne ned til en restaurant for bespising og mingling med bedriftsrepresentantene." : "Capture the Flag is a perfect arena for both getting to know and developing the students' info-sec skills. Here you as a company can challenge our students to solve tasks together! We encourage you to have a self-made CTF that the students can play with. After the CTF itself, it is customary to take all the participants down to a restaurant for dining and mingling with the company representatives."}</Text>
              {Space(25)}
            </View>

            <View>
              <View style={GS.row}>
                <Image style={GS.medium} source={theme == 0 || theme == 2 || theme == 3 ? require('../../assets/workshop.png') : require('../../assets/workshop-black.png')} />
                <Text style={{...T.bold28, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'Workshop & Fagpres' : 'Workshop & Subject Presentation'}</Text>
              </View>
              <Text style={{...T.paragraph, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'Login arrangerer ogs?? workshops og fagpresentasjoner. Workshops g??r ut p?? at bedriften f??r litt tid hvor de kan presentere seg selv, etterfulgt av at studenter jobber med diverse prosjekter de har samtidig som bedriftsrepresentanter mingler og gir tips til studenter. Med en fagpresentasjon vil bedriften igjen kunne kort presentere seg selv f??r det blir holdt en faglig fokusert presentasjon av bedriften. Her kan det v??re formidling av teknologier eller prinsipp som deres bedrift jobber med.' : 'Login also organizes workshops and subject presentations. Workshops involve the company getting some time where they can present themselves, followed by students working on various projects they have at the same time as company representatives mingle and give tips to students. With a professional presentation, the company will again be able to briefly introduce itself before a professionally focused presentation of the company is held. Here it can be the dissemination of technologies or principles that your company works with.'}</Text>
              {Space(25)}
            </View>
            
            <View>
              <View style={GS.row}>
                <Image style={GS.medium} source={theme == 0 || theme == 2 || theme == 3 ? require('../../assets/utlysning.png') : require('../../assets/utlysning-black.png')} />
                <Text style={{...T.bold28, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'Utlysning & Profilering' : 'Ads & Profiling'}</Text>
              </View>
              <Text style={{...T.paragraph, color: FetchColor(theme, 'TEXTCOLOR')}}>{lang ? 'PR komiteen tilbyr ogs?? deling av stillingsutlysninger, jobbannonser, og annen type profilering p?? v??re aktive sosiale kanaler (Discord, Instagram, Facebook, Login.no). Dersom bedriften har arrangert en bedpres, workshop/fagpres eller CTF med oss det gjeldene semesteret vil profilering v??re inkludert (uten ekstra kostnad).' : 'The PR committee also offers the sharing of job advertisements, job advertisements and other types of profiling on our active social channels (Discord, Instagram, Facebook, Login.no). If the company has arranged a bedpres, workshop/fagpres or CTF with us in the current semester, profiling will be included (at no extra cost).'}</Text>
            </View>

            {Space(10)}

            <Kontakt/>

          </Card>
            
          {Space(10)}
          {Space(Dimensions.get('window').height/10)}
        </ScrollView>
        
      </View>   

{/* ========================= DISPLAY TOP MENU ========================= */}
{Platform.OS === 'ios' ? <BlurView style={MS.topMenu} intensity={30}/> : <View style={{...MS.topMenu, backgroundColor: FetchColor(theme, 'TRANSPARENTANDROID')}}/>}
      <View style={{...MS.topMenu, backgroundColor: FetchColor(theme, 'TRANSPARENT')}}>
    <TouchableOpacity onPress={() => menuPage()}>
      <Image style={MS.goBack} source={require('../../assets/goback777.png')} />
    </TouchableOpacity>

    <View style={GS.loginStatus}>{login ? DynamicCircle(10,10,'red',0,0,60,0):null}</View>

    <Text style={{... MS.screenTitle, color: FetchColor(theme, 'TITLETEXTCOLOR')}}>{lang ? 'For bedrifter' : 'For companies'}</Text>
  </View>

{/* ========================= DISPLAY BOTTOM MENU ========================= */}
{Platform.OS === 'ios' ? <BlurView style={MS.bMenu} intensity={30}/> : <View style={{...MS.bMenu, backgroundColor: FetchColor(theme, 'TRANSPARENTANDROID')}}/>}
    <View style={{...MS.bMenu, backgroundColor: FetchColor(theme, 'TRANSPARENT')}}>
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