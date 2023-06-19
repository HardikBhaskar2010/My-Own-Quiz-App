import React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BuzzerScreen from './screens/BuzzerScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const AppNavigator = createSwitchNavigator(
  {
    HomeScreen: HomeScreen,
    BuzzerScreen: BuzzerScreen,
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    );
  }
}
