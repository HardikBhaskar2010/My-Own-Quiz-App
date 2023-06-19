import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader.js';
import SoundButton from '../components/SoundButton';

export default class BuzzerScreen extends React.Component {
  goBack = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    const { navigation } = this.props;
    const color = navigation.getParam('color', 'red');

    return (
      <View style={{ flex: 1 }}>
        <AppHeader />
        <TouchableOpacity style={styles.goBackButton} onPress={this.goBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
        <SoundButton color={color} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  goBackText: {
    marginLeft: 5,
    fontSize: 16,
  },
});
