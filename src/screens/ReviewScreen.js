import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import ResultsList from '../components/Results/ResultsList';
import {useComparisonContext} from '../components/ComparisonContext';
// import {useComparisonContext} from '../components/ComparisonContext';

const ResultsScreen = ({navigation}) => {
  // const resultList = useResultListContext();
  const [reviewData, setReviewData] = useState([
    {id: '1', name: 'John', review: 'This was a great medicine', rating: 4.5},
    {id: '2', name: 'Max', review: 'This was a great medicine', rating: 3.2},
    {
      id: '3',
      name: 'Alice',
      review: 'I had some side effects, but it worked well',
      rating: 3.8,
    },
    {
      id: '4',
      name: 'Emily',
      review: 'Not effective for me. I had to switch to another medication',
      rating: 2.0,
    },
    {
      id: '5',
      name: 'Bob',
      review: 'Highly recommend! No side effects and fast relief',
      rating: 4.8,
    },
    {
      id: '6',
      name: 'Sophia',
      review: 'Average medicine. It helped with the symptoms',
      rating: 3.0,
    },
    {
      id: '7',
      name: 'David',
      review: 'Terrible experience. I experienced severe allergic reactions',
      rating: 1.2,
    },
    {
      id: '8',
      name: 'Ella',
      review: 'Good medicine, but a bit expensive',
      rating: 4.0,
    },
    {
      id: '9',
      name: 'Daniel',
      review: 'It took some time to show results, but it eventually worked',
      rating: 3.5,
    },
    {
      id: '10',
      name: 'Olivia',
      review:
        'Not satisfied with the results. I had to consult my doctor for an alternative',
      rating: 2.5,
    },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#353535'} />
      <FlatList
        data={reviewData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.historyItem}>
            <Text style={styles.eventText}>{item.name}</Text>
            <Text style={styles.eventText}>Rating: {item.rating}</Text>
            <Text style={styles.dateText}>Review: {item.review}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    paddingVertical: 10,
  },
  historyItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#444',
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

export default ResultsScreen;
