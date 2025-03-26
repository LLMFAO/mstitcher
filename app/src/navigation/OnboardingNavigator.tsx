import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingStackParamList } from './types';

// Import screens (we'll create these later)
// For now, let's create placeholder components
import { View, Text } from 'react-native';

// Placeholder screens
const OnboardingWelcomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Onboarding Welcome Screen</Text>
  </View>
);

const BasicProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Basic Profile Screen</Text>
  </View>
);

const MemoryFileInitScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Memory File Initialization Screen</Text>
  </View>
);

const FirstStoryPromptScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>First Story Prompt Screen</Text>
  </View>
);

const Stack = createStackNavigator<OnboardingStackParamList>();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={OnboardingWelcomeScreen} />
      <Stack.Screen name="BasicProfile" component={BasicProfileScreen} />
      <Stack.Screen name="MemoryFileInit" component={MemoryFileInitScreen} />
      <Stack.Screen name="FirstStoryPrompt" component={FirstStoryPromptScreen} />
    </Stack.Navigator>
  );
};