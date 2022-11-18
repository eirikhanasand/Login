import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/home'
import EventScreen from '../screens/event';
import AboutScreen from '../screens/about';
import SettingScreen from '../screens/settings';
import SpecificEventScreen from '../screens/specificEvent';
import InternalScreen from '../screens/internal';
import BusinessScreen from '../screens/business';
import NotificationScreen from '../screens/notification';
import ContactScreeen from '../screens/contact';
import TodoScreen from '../screens/todo';
import MakeNotificationScreen from '../screens/makeNotification';
import LoginScreen from '../screens/login';

const screens = {
    EventScreen: {
        screen: EventScreen
    },
    SettingScreen: {
        screen: SettingScreen
    },
    HomeScreen: {
        screen: HomeScreen
    },
    SpecificEventScreen: {
        screen: SpecificEventScreen,
    },
    AboutScreen: {
        screen: AboutScreen
    },
    BusinessScreen: {
        screen: BusinessScreen
    },
    InternalScreen: {
        screen: InternalScreen
    },
    LoginScreen: {
        screen: LoginScreen
    },
    NotificationScreen: {
        screen: NotificationScreen
    },
    ContactScreen: {
        screen: ContactScreeen
    },
    TodoScreen: {
        screen: TodoScreen
    },
    MakeNotificationScreen: {
        screen: MakeNotificationScreen
    },
}

const HomeStack = createStackNavigator(screens, {defaultNavigationOptions: {
    animationEnabled: false,
    title: '',
    headerShown: '',
    headerTintColor: '#fd8738',
    headerBackTitleVisible: '',
    headerStyle: {
        backgroundColor: '#111',
    },
}});

export default createAppContainer(HomeStack);
