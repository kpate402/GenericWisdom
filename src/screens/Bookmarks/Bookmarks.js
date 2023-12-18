import React from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import MedCardList from '../../components/Bookmarks/MedCardList';
import {useComparisonContext} from '../../components/ComparisonContext';

const Bookmarks = ({navigation}) => {
  const BookmarkedMedicineList = useComparisonContext().bookmarks;
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <StatusBar backgroundColor={'#353535'} />
      <View>
        <MedCardList data={BookmarkedMedicineList} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f1f1f1',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#f1f1f1',
    marginBottom: 10,
    fontWeight: '600',
  },
});

export default Bookmarks;
