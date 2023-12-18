import React, {Component, useState} from 'react';
import {Text, View, StatusBar, StyleSheet, TextInput, FlatList, ScrollView} from 'react-native';
import {Icon} from '@rneui/themed';
import SearchBar from '../../components/Home/SearchBar.js';
import ResultsList from '../../components/Results/ResultsList.js'

const Search = ({navigation}) => {
  return (
    <View style={styles.searchContainer}>
      <StatusBar backgroundColor={'#353535'} />
      <SearchBar navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: '#353535',
  }

});

export default Search;
