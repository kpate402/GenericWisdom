import React from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import HomeCard from './HomeCard';
import { PainList } from '../../data';
import {
  useComparisonContext, 
  useUpdateComparisonContext
} from '../ComparisonContext';

const HomeCardList = props => {
  const updateBrands = useUpdateComparisonContext();
  const handleBrandSelection = (brandName, brandInfo) => {
    updateBrands(brandName, brandInfo);
  };

  return (
    <>
      <View>
        {props.data.map(item => (
          
          <View key={item.name}>
            <TouchableOpacity
                onPress={() => {
                  handleBrandSelection('brand1', 
                  PainList.filter((x) => item.name === x.name)[0]);
                  props.navigation.navigate("Results");
            }}>
              <HomeCard
                data={item}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </>
  );
};

export default HomeCardList;
