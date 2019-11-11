
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Homepage';
import ProfileScreen from './ProfilePage';
import MemeCategory from './MemeCategory';
import CreateScreen from './CreateMeme';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
  MemeCat: MemeCategory,
  CreateMeme: CreateScreen,
},
{
  initialRouteName: 'Home',
}
);

export default createAppContainer(AppNavigator);

