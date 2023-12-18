import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './src/components/navigation/BottomTabNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ComparisonContextProvider} from './src/components/ComparisonContext';
import { InfoContextProvider } from './src/components/InfoContext';
import CompareScreen from './src/screens/CompareScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import ReviewScreen from './src/screens/ReviewScreen';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <InfoContextProvider>
      <ComparisonContextProvider>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="BottomTabNavigator"
                screenOptions={{headerShown: false}}>
                <Stack.Screen
                  name="BottomTabNavigator"
                  component={BottomTabNavigator}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </ComparisonContextProvider>
    </InfoContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
