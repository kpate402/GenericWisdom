import React, { useState } from 'react';
import { Text, View, StatusBar, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { PainList } from '../../data';
import { useComparisonContext, useUpdateComparisonContext } from '../../components/ComparisonContext';

const History = ({ navigation }) => {
  const [historyData, setHistoryData] = useState([
    { id: '1', name: 'Didaudid', date: '2023-11-15' },
    { id: '2', name: 'Oxycodone', date: '2023-02-28' },
    { id: '3', name: 'Morphine', date: '2023-04-17' },
    { id: '4', name: 'Tramadol', date: '2023-10-05' },
    { id: '5', name: 'Ketorolac', date: '2023-06-20' },
    { id: '6', name: 'Norco', date: '2023-09-03' },
    { id: '7', name: 'Percocet', date: '2023-03-12' },
    { id: '8', name: 'Cyclobenzaprine', date: '2023-08-02' },
    { id: '9', name: 'Methocarbamol', date: '2023-07-14' },
    { id: '10', name: 'Aspirin', date: '2023-05-19' },
    { id: '11', name: 'Ibuprofen', date: '2023-11-01' },
    { id: '12', name: 'Acetaminophen', date: '2023-01-20' },
    { id: '13', name: 'Naproxen', date: '2023-08-28' },
  ]);

  const updateBrands = useUpdateComparisonContext();

  const handleBrandSelection = (brandName, brandInfo) => {
      updateBrands(brandName, brandInfo);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#353535'} />
      <FlatList
        data={historyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => {
              handleBrandSelection('brand1', 
              PainList.filter((x) => item.name === x.name)[0]);
              navigation.navigate("Results:")
            }}>
            <View style={styles.historyItem}>
              <Text style={styles.eventText}>{item.name}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f1f1',
    marginBottom: 20,
  },
  historyItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  eventText: {
    fontSize: 18,
    color: '#f1f1f1',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#999',
  },
});

export default History;
