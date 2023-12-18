import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import SearchBar from '../../components/Home/SearchBar';
import pillIcon from '../../images/pills.png';
import bottleIcon from '../../images/bottle.png';
import HomeCardList from '../../components/Home/HomeCardList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useUpdateComparisonContext} from '../../components/ComparisonContext';
import {
  useInfoContext,
  useUpdateInfoContext,
} from '../../components/InfoContext';

const popularMedicineList2 = [
  {
    name: 'Advil',
    price: '12.99',
    generic: 'brand',
    pros: ['Pain Relief', 'Fast Acting', 'Reliable', 'Popular'],
    cons: ['Diarrhea', 'Possible death'],
    rating: 4.5,
    description:
      'Advil is a widely used pain reliever known for its fast and effective results.',
    ingredients: ['Ibuprofen', 'Starch', 'Cellulose'],
    manufacturer: 'Pfizer',
  },

  {
    name: 'Benadryl',
    price: '19.99',
    generic: 'generic',
    pros: ['relieve allergy and cold symptoms', 'lower-cost generic'],
    cons: ['drowsiness', 'hyperactivity'],
    rating: 4.2,
    description: 'treat allergies, common cold symptoms, and itching.',
    ingredients: ['Magnesium stearate', 'Polyethylene Glycol', 'Hypromellose'],
    manufacturer: 'Kenvue',
  },
  {
    name: 'Tylenol',
    price: '2.25',
    generic: 'generic',
    pros: [
      'relieve mild aches or pain and lower fever',
      ' lower-cost generic ',
    ],
    cons: ["Doesn't help with inflammation and swelling", 'Liver damage'],
    rating: 3.5,
    description: 'lower fever and relieve mild pain in adults and children',
    ingredients: ['Acetaminophen'],
    manufacturer: 'McNeil Laboratories, Inc',
  },
  {
    name: 'Zyrtec',
    price: '3.16',
    generic: 'generic',
    pros: ['Lower risk of sleepiness', 'relieving allergy'],
    cons: ['Sleepiness', 'liver or kidney problems'],
    rating: 4.6,
    description:
      'Cetirizine (Zyrtec) works well for allergies and usually causes less side',
    ingredients: ['Cetirizine'],
    manufacturer: 'Johnson & Johnson Consumer Inc',
  },
];

const recommendedMedicineList = [
  {name: 'Claritin', color: '#8400e7', image: pillIcon},
  {name: 'Pepto Bismol', image: bottleIcon},
  {name: 'Ibuprofen', color: '#0d73ec', image: pillIcon},
];

const brandInfoData = [
  {
    name: 'Advil',
    price: '12.99',
    generic: 'brand',
    color: '#8400e7',
    pros: ['Pain Relief', 'Fast Acting', 'Reliable', 'Popular'],
    cons: ['Diarrhea', 'Possible death'],
    rating: 4.5,
    description:
      'Advil is a widely used pain reliever known for its fast and effective results.',
    ingredients: ['Ibuprofen', 'Starch', 'Cellulose'],
    manufacturer: 'Pfizer',
  },
  {
    name: 'Claritin',
    price: '9.99',
    generic: 'brand',
    color: '#8400e7',
    pros: ['Non-Drowsy', 'Fast Acting', 'Reliable', 'Popular'],
    cons: ['Dry Mouth', 'Possible drowsiness'],
    rating: 4.2,
    description:
      'Claritin is a popular antihistamine used for allergy relief without causing drowsiness.',
    ingredients: ['Loratadine', 'Calcium', 'Stearic Acid'],
    manufacturer: 'Bayer',
  },
  {
    name: 'Benadryl',
    price: '7.99',
    generic: 'generic',
    color: '#8400e7',
    pros: [
      'prevents nausea',
      'prevents dizziness',
      'treats sneezing',
      'treats runny nose',
      'prevents other allergy symptoms',
    ],
    cons: ['upset stomach', 'Possible drowsiness'],
    rating: 3.6,
    description:
      'Benadryl is an antihistamine that reduces the effects of natural chemical histamine in the body.',
    ingredients: ['Carnauba Wax', 'Hypromellose', 'Magnesium stearate'],
    manufacturer: 'Pfizer',
  },
  {
    name: 'Pepto Bismol',
    price: '5.95',
    generic: 'brand',
    color: '#8400e7',
    pros: ['Controls: diarrhoea'],
    cons: ['tongue turning black', 'black poo'],
    rating: 2.0,
    description:
      'used for heartburn and acid reflux, indigestion, diarrhoea and feeling sick (nausea)',
    ingredients: ['Bismuth Subsalicylate'],
    manufacturer: 'Procter & Gamble company',
  },
  {
    name: 'Ibuprofen',
    price: '8.39',
    generic: 'generic',
    color: '#8400e7',
    pros: ['lower-cost generics', 'Works well for fever, pain, and swelling'],
    cons: [
      'Heart attack and stroke',
      'Kidney damage',
      'Stomach bleeding and ulcers',
    ],
    rating: 4.0,
    description:
      'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) thats used to temporarily relieve fever, pains, and aches in adults and children.',
    ingredients: [
      'Lactose',
      'Maize Starch',
      'Hypromellose',
      'Sodium Starch Glycollate',
    ],
    manufacturer: 'BASF ',
  },
  {
    name: 'Tylenol',
    price: '2.25',
    generic: 'generic',
    color: '#8400e7',
    pros: [
      'relieve mild aches or pain and lower fever',
      ' lower-cost generic ',
    ],
    cons: ["Doesn't help with inflammation and swelling", 'Liver damage'],
    rating: 3.5,
    description: 'lower fever and relieve mild pain in adults and children',
    ingredients: ['Acetaminophen'],
    manufacturer: 'McNeil Laboratories, Inc',
  },
  {
    name: 'Zyrtec',
    price: '3.16',
    generic: 'generic',
    color: '#8400e7',
    pros: ['Lower risk of sleepiness', 'relieving allergy'],
    cons: ['Sleepiness', 'liver or kidney problems'],
    rating: 4.6,
    description:
      'Cetirizine (Zyrtec) works well for allergies and usually causes less side effects',
    ingredients: ['Cetirizine'],
    manufacturer: 'Johnson & Johnson Consumer Inc',
  },
];

const Home = ({navigation}) => {
  const visibility = useInfoContext();
  const updateVisibility = useUpdateInfoContext();
  const updateBrands = useUpdateComparisonContext();

  const handleBrandSelection = (brandName, brandInfo) => {
    updateBrands(brandName, brandInfo);
  };
  return (
    <>
      <View style={styles.searchContainer}>
        <SearchBar navigation={navigation} />

        <Modal
          animationType="fade"
          transparent={true}
          visible={visibility}
          onRequestClose={() => updateVisibility()}>
          <TouchableOpacity
            onPress={() => updateVisibility()}
            style={styles.centeredView}>
            <View>
              <View style={styles.modalView}>
                <View style={styles.closeIconContainer}>
                  <MaterialCommunityIcons
                    name={'close-box-outline'}
                    color={'#f1f1f1'}
                    size={36}
                  />
                </View>
                <Text style={styles.modalText}>
                  1. Use the search bar or select a popular brand to start.
                </Text>
                <Text style={styles.modalText}>
                  2. On the results screen, tap a card to select a brand to
                  compare.
                </Text>
                <Text style={styles.modalText}>
                  3. Tap a heart to save it to your favorites! Woohoo!
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <StatusBar backgroundColor={'#353535'} />
        <View>
          <Text style={styles.header}>Popular Brands:</Text>
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              marginBottom: 10,
            }}
          />
          <HomeCardList data={popularMedicineList2} navigation={navigation} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  modalText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#f1f1f1',
    fontSize: 18,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#353535',
    borderRadius: 10,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeIconContainer: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
  },
  mButton: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchContainer: {
    backgroundColor: '#353535',
  },
  container: {
    flex: 1,
    backgroundColor: '#353535',
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f1f1',
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#61dafb',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
