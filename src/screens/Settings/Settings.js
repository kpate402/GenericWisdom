import React from 'react';
import {Text, View, StatusBar, StyleSheet, Image} from 'react-native';
import Pikachu from '../../images/drPikachu.png';

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#353535'} />
      <Text style={styles.text}>Settings</Text>
      <View>
        <Image style={{width: 300, height: 300}} source={Pikachu} />
      </View>
      <Text style={styles.text}>Pika Pika Settings not ready yet Pika Pika</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353535',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
});

export default Settings;
