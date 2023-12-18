import React from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import ResultsList from '../components/Results/ResultsList';
import SearchBar from '../components/Home/SearchBar';

const ResultsScreen = ({navigation}) => {
  // const resultList = useResultListContext();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#353535'} />
      <View style={{marginBottom: 30}}>
        <SearchBar navigation={navigation} />
      </View>
      <ResultsList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    paddingVertical: 10,
  },
});

export default ResultsScreen;
