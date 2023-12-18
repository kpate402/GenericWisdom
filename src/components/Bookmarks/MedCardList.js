import React from 'react';
import {View} from 'react-native';
import MedCard from './MedCard';

const MedCardList = props => {
  // Check if props.data is an array before mapping
  if (!Array.isArray(props.data)) {
    console.error('Invalid data provided to MedCardList:', props.data);
    return null; // or handle the error in a way that makes sense for your application
  }

  return (
    <View>
      {props.data.map(item => (
        <View key={item.name}>
          <MedCard data={item} />
        </View>
      ))}
    </View>
  );
};

export default MedCardList;
