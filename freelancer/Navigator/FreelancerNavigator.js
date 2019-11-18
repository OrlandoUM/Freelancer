import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../Screen/Intro/HomeScreen/HomeScreen';
import CadastroScreen from '../Screen/Intro/CadastroScreen/CadastroScreen';
import ProfileScreen from '../Screen/Intro/ProfileScreen/ProfileScreen';
import WellcomeScreen from '../Screen/Intro/WellcomeScreen/WellcomeScreen';
import SeekerScreen from '../Screen/Seeker/SeekerScreen';
import WorkerScreen from '../Screen/Worker/WorkerScreen';

const FreelancerNavigator = createStackNavigator(
  {
    Home: { 
      screen: HomeScreen,
    },
    Cadastro: { 
      screen: CadastroScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Wellcome: {
      screen: WellcomeScreen,
    },
    Seeker: {
      screen: SeekerScreen,
    },
    Worker: {
      screen: WorkerScreen,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const Router = createAppContainer(FreelancerNavigator);

export default Router;