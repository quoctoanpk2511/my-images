import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from './src/components/header/Header'
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import Camera from './src/screens/Camera'
import Album from './src/screens/Album'
import Profile from './src/screens/Profile'

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#0000FF',
        }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="magnify" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Camera"
            component={Camera}
            options={{
              tabBarLabel: 'Camera',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="camera" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Album"
            component={Album}
            options={{
              tabBarLabel: 'Album',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="image-multiple" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}