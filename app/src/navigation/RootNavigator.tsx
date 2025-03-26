import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import { OnboardingNavigator } from './OnboardingNavigator';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { View, ActivityIndicator } from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { user, isLoading: authLoading } = useAuth();
  const { memoryFile, isLoading: appLoading } = useApp();
  const [isLoading, setIsLoading] = useState(true);
  
  // Determine if the user needs onboarding
  const needsOnboarding = user && !memoryFile;

  useEffect(() => {
    // Wait for both auth and app data to load
    if (!authLoading && !appLoading) {
      setIsLoading(false);
    }
  }, [authLoading, appLoading]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F0E8' }}>
        <ActivityIndicator size="large" color="#8B5A2B" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          needsOnboarding ? (
            // User is logged in but needs to complete onboarding
            <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
          ) : (
            // User is logged in and has completed onboarding
            <Stack.Screen name="Main" component={MainNavigator} />
          )
        ) : (
          // User is not logged in
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};