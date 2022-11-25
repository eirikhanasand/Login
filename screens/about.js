{/* ========================= IMPORTING NEEDED LIBRARIES ========================= */}
import { StatusBar } from 'expo-status-bar';
import { GS } from '../styles/globalStyles';
import { T } from '../styles/text';
import { MS } from '../styles/menuStyles';
import Card from '../shared/card';
import { Copyright } from '../shared/sharedComponents';

import { 
  Text, 
  View, 
  Image, 
  ScrollView,
  TouchableOpacity
} from 'react-native';

{/* ========================= APP START ========================= */}

export default function AboutScreen( { navigation }) {

{/* ========================= DISPLAY APP START ========================= */}

const settingsPage = () => {
  navigation.navigate('SettingScreen')
}
const eventPage = () => {
  navigation.navigate('EventScreen')
}
const homePage = () => {
  navigation.navigate('HomeScreen')
}
const profilePage = () => {
  navigation.navigate('ProfileScreen');
}
const goBack = () => {
  navigation.goBack()
}

return(
  <View style={MS.backGround}>
      <StatusBar style="light" />
{/* ========================= DISPLAY TOP MENU ========================= */}
  <View style={MS.topMenu}>
    <TouchableOpacity onPress={() => goBack()}>
      <Image style={MS.goBack} source={require('../assets/goback777.png')} />
    </TouchableOpacity>

    <Text style={MS.screenTitle}>    Om Login</Text>

    <View style={MS.tMenuIcons}>
      <TouchableOpacity onPress={() => profilePage()}>
        <Image style={MS.tMenuL} source={require('../assets/loginperson777.png')} />
      </TouchableOpacity>
    </View>
  </View>
{/* ========================= DISPLAY CONTENT ========================= */}
<View style={GS.content}>
        
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card>
        <Text style={T.centered25}>Om Login</Text><Text/>
        <Text style={T.paragraph}>Login er linjeforeningen for IT ved  NTNU i Gjøvik og alle som går de følgene studiene er automatisk medlemmer i foreningen.</Text>
        <Text></Text>
        <Text style={T.centered25}>Av studenter, for studenter.</Text><Text/>
        <Text style={T.paragraph}>Foreningen drives av frivillige studenter som arbeider for at du skal få mest mulig ut av studiene dine ved  NTNU.</Text><Text/>
        <Text style={T.paragraph}>Vi arrangerer regelmessig sosiale arrangementer og bedriftspresentasjoner. Vi holder kontakt med aktuelle bedrifter og inviterer til blant annet cyberdagene én gang i semesteret slik at du som student skal bli kjent med mulighetene utdanningen din gir deg.</Text><Text/>
        <Text style={T.paragraph}>Hver uke samler vi studenter til  TekKom- og  CTF-samlinger, der man kan lære seg nye ting eller komme med bidrag til foreningen. Her kan man møte andre studenter som deler gleden for å lære, og å sette kunnskapene man tilegner seg i praksis. Videre jobber EvntKom stadig med nye og spennende arrangementer som f.eks. filmkvelder og vinterball.</Text>
        <Text></Text>
        <Text style={T.centered25}>Styret og komiteene</Text>
        <Text style={T.paragraph}>Foreningen er satt sammen av et hovedstyret og en rekke komiteer.</Text>
        <Text style={T.red}>Knapper mellom de forskjellige komiteene</Text>
        <Text></Text>
        <Copyright/>
      </Card>

    </ScrollView>
  </View> 

  <View style={MS.bMenuUniversal}>
      <TouchableOpacity onPress={() => homePage()}>
        <Image style={MS.homeSelected} source={require('../assets/house-orange.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => eventPage()}>
        <Image style={MS.bMenu2} source={require('../assets/calendar777.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => settingsPage()}>
        <Image style={MS.bMenu1} source={require('../assets/menu777.png')} />
      </TouchableOpacity>
      </View> 
    </View>
    
  )
};
