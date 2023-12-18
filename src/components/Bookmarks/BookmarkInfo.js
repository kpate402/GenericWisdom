import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BookmarkInfo = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <View style={styles.section}>
          <Text style={styles.text}>Price: {data.price} (USD)</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Rating: {data.rating} / 5</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Manufacturer: {data.manufacturer}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Description:</Text>
          <Text style={styles.body}>{data.description}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Ingredients: {data.ingredients.join(', ')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
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
    borderTopColor: '#f1f1f1',
    borderBottomColor: '#f1f1f1',
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  brandContainer: {
    height: '50%',
  },
});
export default BookmarkInfo;
