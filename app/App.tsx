import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootProvider } from './src/context/RootProvider';
import { RootNavigator } from './src/navigation/RootNavigator';
import { useTheme } from './src/context/ThemeContext';

// Component to handle theme-aware status bar
const ThemedStatusBar = () => {
  const { isDarkMode } = useTheme();
  return <StatusBar style={isDarkMode ? 'light' : 'dark'} />;
};

export default function App() {
  return (
    <SafeAreaProvider>
      <RootProvider>
        <RootNavigator />
        <ThemedStatusBar />
      </RootProvider>
    </SafeAreaProvider>
  );
}
