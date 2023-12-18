import React, {Component, useState, useContext} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {
  useComparisonContext,
  useUpdateComparisonContext,
} from '../ComparisonContext';
import {brandInfoData, PainList} from '../../data';

const SearchedItem = React.createContext(null);

const SearchBar = ({navigation}) => {
  const [input, setInput] = useState('');
  const [focused, setFocus] = useState(false);

  const updateBrands = useUpdateComparisonContext();

  const handleBrandSelection = (brandName, brandInfo) => {
    updateBrands(brandName, brandInfo);
  };

  const brands = [
    {
      name: 'Tylenol',
      id: '1',
    },
    {
      name: 'Benadryl',
      id: '2',
    },
    {
      name: 'Advil',
      id: '3',
    },
    {
      name: 'Naproxen',
      id: '4'
    },
    {
      name: 'Moltrin',
      id: '5',
    },
    {
      name: 'Zyrtec',
      id: '6'
    }
  ];

  const Item = ({title}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            setInput(title);
            setFocus(false);

            handleBrandSelection(
              'brand1',
              PainList.filter(item => item.name === title)[0],
            );
            navigation.navigate('Results');
          }}
          style={styles.item}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
      </>
    );
  };

  const filteredBrands = text => {
    let ret = brands.filter(item =>
      item.name.toLowerCase().startsWith(text.toLowerCase()),
    );
    return ret;
  };

  return (
    <View style={{marginTop: 20, paddingHorizontal: 20}}>
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" />
        <TextInput
          style={styles.textInput}
          value={input}
          placeholder="Search for a brand"
          onChangeText={text => {
            setInput(text);
          }}
          onFocus={() => setFocus(true)}
        />
      </View>

      <FlatList // Search recommendations list
        data={focused ? filteredBrands(input) : []}
        renderItem={({item}) => <Item title={item.name} />}
        keyExtractor={item => item.id}
        extraData={{focused, input}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',

    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 15,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  textInput: {
    flexGrow: 1,
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    color: '#424242',
  },
  item: {
    backgroundColor: 'white',
    width: '95%',
    marginHorizontal: '2.5%',
  },
  title: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#747474',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    width: '95%', // item.width
    marginHorizontal: '2.5%', // item.marginHorizontal
  },
});
export default SearchBar;
