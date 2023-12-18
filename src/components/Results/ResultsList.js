import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import MedCard from '../Bookmarks/MedCard';
import ResultsCard from '../Results/ResultsCard';
import bottleIcon from '../../images/bottle.png';
import pillIcon from '../../images/pills.png';
import {PainList, brandInfoData} from '../../data.js';
import {
  useComparisonContext,
  useUpdateComparisonContext,
} from '../ComparisonContext';

const ResultsList = ({data, navigation}) => {
  // const filteredBySymptom = data.filter(item => {
  //     item.symptom == 'Pain'
  // });
  const updateBrands = useUpdateComparisonContext();
  const brands = useComparisonContext();

  const handleBrandSelection = (brandName, brandInfo) => {
    updateBrands(brandName, brandInfo);
  };
  const newPainList = PainList.filter(item => item.name !== brands.brand1.name);
  return (
    <ScrollView style={{marginHorizontal: 20}}>
      <View style={{paddingBottom: 10}}>
        <Text style={styles.text}>Brands similar to {brands.brand1.name}</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          marginBottom: 20,
        }}
      />
      <View>
        {newPainList.map(item => (
          <View key={item.name}>
            <TouchableOpacity
              onPress={() => {
                handleBrandSelection(
                  'brand2',
                  newPainList.filter(x => item.name == x.name)[0],
                );
              }}>
              <ResultsCard data={item} navigation={navigation} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
});
export default ResultsList;

// for later
{
  /* <>
  <View>
    {filteredBySymptom.map(item => (
      <View key={item.name}>
        <MedCard
          text={item.name}
          imageLink={item.image}
          color={item.color}
          description = {item.description}
        />
      </View>
    ))}
  </View>
</> */
}
