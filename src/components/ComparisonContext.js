import React, {useContext, useState} from 'react';

const ComparisonContext = React.createContext(null); // application wide state for keeping track of comparisons
const UpdateComparisonContext = React.createContext(null); // function to update state

export const useComparisonContext = () => {
  return useContext(ComparisonContext);
};

export const useUpdateComparisonContext = () => {
  return useContext(UpdateComparisonContext);
};

export const ComparisonContextProvider = ({children}) => {
  const [selectedBrands, setSelectedBrands] = useState({
    brand1: null,
    brand2: null,
    bookmarks: [
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
    ],
  });

  const setBrand = (brandName, brandInfo) => {
    setSelectedBrands(prevSelectedBrands => ({
      ...prevSelectedBrands,
      [brandName]: brandInfo,
    }));
  };

  return (
    <ComparisonContext.Provider value={selectedBrands}>
      <UpdateComparisonContext.Provider value={setBrand}>
        {children}
      </UpdateComparisonContext.Provider>
    </ComparisonContext.Provider>
  );
};
