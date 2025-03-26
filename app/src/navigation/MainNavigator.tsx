import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import { View, Text } from 'react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';

// Placeholder screens (we'll replace these later)

const StoriesScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Stories Screen</Text>
  </View>
);

const NewStoryScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>New Story Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8B5A2B', // Primary color from our theme
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          backgroundColor: '#F5F0E8', // Secondary color from our theme
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          // We'll add icons later
        }}
      />
      <Tab.Screen 
        name="Stories" 
        component={StoriesScreen} 
        options={{
          tabBarLabel: 'My Stories',
          // We'll add icons later
        }}
      />
      <Tab.Screen 
        name="NewStory" 
        component={NewStoryScreen} 
        options={{
          tabBarLabel: 'New Story',
          // We'll add icons later
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Profile',
          // We'll add icons later
        }}
      />
    </Tab.Navigator>
  );
};