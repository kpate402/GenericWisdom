import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BookmarkInfo from '../Bookmarks/BookmarkInfo';
import {
  useComparisonContext,
  useUpdateComparisonContext,
} from '../ComparisonContext';

const HomeCard = props => {
  const [expanded, setExpanded] = useState(false);
  const bookmarks = useComparisonContext().bookmarks;
  const setBookmarks = useUpdateComparisonContext();

  const addToBookmarks = () => {
    const isBookmarked = bookmarks.some(
      bookmark => bookmark.name === props.data.name,
    );
    let updatedBookmarks = [];

    if (isBookmarked) {
      console.log('Removing from bookmarks:', props.data.name);
      updatedBookmarks = bookmarks.filter(
        bookmark => bookmark.name !== props.data.name,
      );
    } else {
      console.log('Adding to bookmarks:', props.data.name);
      updatedBookmarks = [...bookmarks, props.data];
    }
    setBookmarks('bookmarks', updatedBookmarks);
  };

  return (
    <View>
      <View style={[styles.cardContainer, {backgroundColor: '#8400e7'}]}>
        <View style={{paddingBottom: 10, flex: 0.8}}>
          <Text style={styles.text}>{props.data.name}</Text>
          {expanded && <BookmarkInfo data={props.data} />}
        </View>
        <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
          <TouchableOpacity onPress={addToBookmarks}>
            <MaterialCommunityIcons
              name= {
                bookmarks.some(bookmark => bookmark.name === props.data.name)
                  ? 'heart'
                  : 'heart-outline'
              }
              color={
                bookmarks.some(bookmark => bookmark.name === props.data.name)
                  ? '#dd103b'
                  : '#f1f1f1'
              }
              
              size={32}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setExpanded(!expanded);
            }}>
            <MaterialCommunityIcons
              name={expanded ? 'chevron-up' : 'chevron-down'}
              color={'#f1f1f1'}
              size={42}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: '#e8115b',
    borderRadius: 7,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    verticalAlign: 'center',
    flex: 1,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f1f1',
    textAlign: 'left',
  },
  additionalText: {
    fontSize: 16,
    color: '#f1f1f1',
    textAlign: 'left',
  },
  bookmarkIcon: {
    width: 45,
    height: 20,
    fontSize: 15,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 5,
    marginLeft: 5,
  },
});

export default HomeCard;
