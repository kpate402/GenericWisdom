import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  useComparisonContext,
  useUpdateComparisonContext,
} from '../components/ComparisonContext';

const CompareScreen = ({navigation}) => {
  const brands = useComparisonContext();
  const bookmarks = brands.bookmarks;
  const setBookmarks = useUpdateComparisonContext();
  console.log(bookmarks);
  if (brands.brand1 == null || brands.brand2 == null) {
    // Render an error message or any other content when brands is null
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Go pick some medicine first.</Text>
      </View>
    );
  }
  const addToBookmarks = brand => {
    const isBookmarked = bookmarks.some(
      bookmark => bookmark.name === brand.name,
    );
    let updatedBookmarks = [];

    if (isBookmarked) {
      console.log('Removing from bookmarks:', brand.name);
      updatedBookmarks = bookmarks.filter(
        bookmark => bookmark.name !== brand.name,
      );
    } else {
      console.log('Adding to bookmarks:', brand.name);
      updatedBookmarks = [...bookmarks, brand];
    }
    setBookmarks('bookmarks', updatedBookmarks);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'#353535'} />
      <View style={styles.brandContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 20,
          }}>
          <Text style={styles.header}>{brands.brand1.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Reviews')}>
              <View style={styles.button}>
                <Text style={styles.text}>Reviews</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addToBookmarks(brands.brand1)}>
              <MaterialCommunityIcons
                name={
                  bookmarks.some(
                    bookmark => bookmark.name === brands.brand1.name,
                  )
                    ? 'heart'
                    : 'heart-outline'
                }
                color={
                  bookmarks.some(
                    bookmark => bookmark.name === brands.brand1.name,
                  )
                    ? '#dd103b'
                    : '#f1f1f1'
                }
                size={32}
                style={{marginLeft: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Price: {brands.brand1.price} (USD)</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Rating: {brands.brand1.rating} / 5</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Manufacturer: {brands.brand1.manufacturer}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Description:</Text>
          <Text style={styles.body}>{brands.brand1.description}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Ingredients: {brands.brand1.ingredients.join(', ')}
          </Text>
        </View>
      </View>
      <View style={styles.brandContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 20,
          }}>
          <Text style={styles.header}>{brands.brand2.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Reviews')}>
              <View style={styles.button}>
                <Text style={styles.text}>Reviews</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addToBookmarks(brands.brand2)}>
              <MaterialCommunityIcons
                name={
                  bookmarks.some(
                    bookmark => bookmark.name === brands.brand2.name,
                  )
                    ? 'heart'
                    : 'heart-outline'
                }
                color={
                  bookmarks.some(
                    bookmark => bookmark.name === brands.brand2.name,
                  )
                    ? '#dd103b'
                    : '#f1f1f1'
                }
                size={32}
                style={{marginLeft: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Price: {brands.brand2.price} (USD)</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Rating: {brands.brand2.rating} / 5</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Manufacturer: {brands.brand2.manufacturer}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Description:</Text>
          <Text style={styles.body}>{brands.brand2.description}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Ingredients:</Text>
          <Text style={styles.body}>
            {brands.brand2.ingredients.join(', ')}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    paddingVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f1f1',
    marginBottom: 10,
    paddingLeft: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
  body: {
    fontSize: 12,
    color: '#f1f1f1',
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: '#626262',
    borderBottomColor: '#626262',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#1e1f22',
  },
  brandContainer: {marginBottom: 20},
  button: {
    backgroundColor: '#767678',
    padding: 5,
    borderRadius: 5,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353535',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ac4b49',
  },
});

export default CompareScreen;
