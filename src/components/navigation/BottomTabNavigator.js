import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import Home from '../../screens/Home/Home';
import Search from '../../screens/Search/Search';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Bookmarks from '../../screens/Bookmarks/Bookmarks';
import Compare from '../../screens/CompareScreen';
import History from '../../screens/History/History';
import Settings from '../../screens/Settings/Settings';
import ResultsScreen from '../../screens/ResultsScreen';
import ReviewScreen from '../../screens/ReviewScreen';
import CompareScreen from '../../screens/CompareScreen';
import { Modal, TouchableOpacity } from 'react-native';
import { useInfoContext, useUpdateInfoContext } from '../InfoContext';


const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();


function HomeStackScreen() {
  const visibility = useInfoContext();
  const updateVisibility = useUpdateInfoContext();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#353535"
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
      }}>
      <HomeStack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerTitle: `Home`,
          headerRight: () => (
            <TouchableOpacity 
              onPress={() => {
                updateVisibility();
              }}
            >
              <MaterialCommunityIcons name="information" color={"white"} size={30}/>

            </TouchableOpacity>
          )
        }}
        />
      <HomeStack.Screen 
        name="Results" 
        component={ResultsScreen}
        options={{
          headerTitle: `Results`
        }}/>
    </HomeStack.Navigator>
  )
}

const CompareStack = createNativeStackNavigator();

function CompareStackScreen() {
  return (
    <CompareStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#353535"
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
      }}>
      <CompareStack.Screen 
        name="Compare" 
        component={CompareScreen}
        options={{
        }}
        />
      <CompareStack.Screen 
        name="Reviews" 
        component={ReviewScreen}
        options={{
          headerTitle: `Reviews:`
        }}/>
    </CompareStack.Navigator>
  )
}


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarStyle: {backgroundColor: '#353535'},
        headerTitleStyle: {color: '#f1f1f1'},
        headerStyle: {backgroundColor: '#353535'},
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CompareTab"
        component={CompareStackScreen}
        options={{
          headerShown: false,
          title: 'Compare',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="equal" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
