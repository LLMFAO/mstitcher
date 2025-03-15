import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

// Placeholder for logo - we'll replace this with actual assets later
const LogoPlaceholder = () => (
  <View style={styles.logoContainer}>
    <Text style={styles.logoText}>MemoryStitcher</Text>
    <Text style={styles.logoSubtext}>Turn Moments into Legacy</Text>
  </View>
);

export const LandingScreen = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  
  const isMobile = width < 768;

  const handleSignIn = () => {
    navigation.navigate('Auth', { screen: 'SignIn' });
  };

  const handleSignUp = () => {
    navigation.navigate('Auth', { screen: 'SignUp' });
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <LogoPlaceholder />
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Weave Your Moments Into a Legacy</Text>
        <Text style={styles.heroSubtitle}>
          Capture and share precious memories with loved ones. Start preserving your legacy today.
        </Text>
      </View>
      
      {/* Tagline Section */}
      <View style={styles.taglineSection}>
        <Text style={styles.tagline}>Tell Your Story Well</Text>
      </View>
      
      {/* Description Section */}
      <View style={styles.descriptionSection}>
        <Text style={styles.description}>
          MemoryStitcher is your personal AI-powered storytelling companion, helping you craft meaningful family narratives through guided conversations and thoughtful questions.
        </Text>
      </View>
      
      {/* Features Section */}
      <View style={styles.featuresSection}>
        {/* Feature 1 */}
        <View style={styles.featureCard}>
          <View style={styles.featureIconContainer}>
            <Text style={styles.featureIcon}>✏️</Text>
          </View>
          <Text style={styles.featureTitle}>Guided Writing</Text>
          <Text style={styles.featureDescription}>
            Interactive conversations that help you unlock and shape your memories
          </Text>
        </View>
        
        {/* Feature 2 */}
        <View style={styles.featureCard}>
          <View style={styles.featureIconContainer}>
            <Text style={styles.featureIcon}>❤️</Text>
          </View>
          <Text style={styles.featureTitle}>Family Connection</Text>
          <Text style={styles.featureDescription}>
            Share stories with loved ones and preserve your family's legacy
          </Text>
        </View>
        
        {/* Feature 3 */}
        <View style={styles.featureCard}>
          <View style={styles.featureIconContainer}>
            <Text style={styles.featureIcon}>📚</Text>
          </View>
          <Text style={styles.featureTitle}>Living Library</Text>
          <Text style={styles.featureDescription}>
            Build a collection of meaningful stories that grows with your family
          </Text>
        </View>
      </View>
      
      {/* Additional Features Section */}
      <View style={styles.featuresSection}>
        {/* Feature 4 */}
        <View style={styles.featureCard}>
          <View style={styles.featureIconContainer}>
            <Text style={styles.featureIcon}>👥</Text>
          </View>
          <Text style={styles.featureTitle}>Collaborative Storytelling</Text>
          <Text style={styles.featureDescription}>
            Multiple family members can contribute to the same story, adding their unique perspectives
          </Text>
        </View>
        
        {/* Feature 5 */}
        <View style={styles.featureCard}>
          <View style={styles.featureIconContainer}>
            <Text style={styles.featureIcon}>🎁</Text>
          </View>
          <Text style={styles.featureTitle}>Story Incentives</Text>
          <Text style={styles.featureDescription}>
            Encourage storytelling through gift card contributions and family rewards
          </Text>
        </View>
        
        {/* Feature 6 */}
        <View style={styles.featureCard}>
          <View style={styles.featureIconContainer}>
            <Text style={styles.featureIcon}>🔒</Text>
          </View>
          <Text style={styles.featureTitle}>Private & Secure</Text>
          <Text style={styles.featureDescription}>
            Control who sees your stories with flexible privacy settings for family sharing
          </Text>
        </View>
      </View>
      
      {/* Family Plans Section */}
      <View style={styles.plansSection}>
        <Text style={styles.plansSectionTitle}>Family Plans Coming Soon</Text>
        <Text style={styles.plansSectionDescription}>
          Experience the power of shared storytelling. Connect with up to 8 family members, collaborate on stories, and build your family's legacy together.
        </Text>
        
        {/* Plans Features */}
        <View style={styles.plansFeatures}>
          <View style={styles.plansFeaturesColumn}>
            <Text style={styles.plansFeaturesTitle}>Collaborative Features</Text>
            <View style={styles.featureRow}>
              <Text style={styles.featureCheck}>✓</Text>
              <Text style={styles.featureText}>Share stories with up to 8 family members</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.featureCheck}>✓</Text>
              <Text style={styles.featureText}>Add multiple perspectives to family stories</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.featureCheck}>✓</Text>
              <Text style={styles.featureText}>Create private family spaces</Text>
            </View>
          </View>
          
          <View style={styles.plansFeaturesColumn}>
            <Text style={styles.plansFeaturesTitle}>Enhanced Features</Text>
            <View style={styles.featureRow}>
              <Text style={styles.featureCheck}>✓</Text>
              <Text style={styles.featureText}>Advanced story organization</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.featureCheck}>✓</Text>
              <Text style={styles.featureText}>Unlimited story storage</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.featureCheck}>✓</Text>
              <Text style={styles.featureText}>Priority support</Text>
            </View>
          </View>
        </View>
      </View>
      
      {/* Free Tier Section */}
      <View style={styles.freeTierSection}>
        <Text style={styles.freeTierTitle}>Start Free Today</Text>
        <Text style={styles.freeTierPrice}>$0<Text style={styles.freeTierPriceUnit}>/month</Text></Text>
        
        <View style={styles.freeTierFeatures}>
          <View style={styles.featureRow}>
            <Text style={styles.featureCheck}>✓</Text>
            <Text style={styles.featureText}>5 personal stories</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.featureCheck}>✓</Text>
            <Text style={styles.featureText}>Basic editor</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.featureCheck}>✓</Text>
            <Text style={styles.featureText}>Private storage</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.startFreeButton} onPress={handleSignUp}>
          <Text style={styles.startFreeButtonText}>Start Free</Text>
        </TouchableOpacity>
        
        <Text style={styles.notificationText}>
          Be the first to know when family plans launch
        </Text>
      </View>
      
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.copyright}>
          Copyright © 2025 MemoryStitcher. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8', // Light beige background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#F5F0E8',
  },
  logoContainer: {
    flexDirection: 'column',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5A2B', // Brown color
  },
  logoSubtext: {
    fontSize: 14,
    color: '#8B5A2B', // Brown color
  },
  headerButtons: {
    flexDirection: 'row',
  },
  signInButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  signInText: {
    color: '#8B5A2B', // Brown color
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#8B5A2B',
  },
  signUpText: {
    color: '#8B5A2B', // Brown color
    fontWeight: '600',
  },
  heroSection: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 15,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    maxWidth: 600,
  },
  taglineSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  tagline: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
  },
  descriptionSection: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    maxWidth: 800,
  },
  featuresSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  featureCard: {
    width: 300,
    padding: 20,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F5F0E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  featureIcon: {
    fontSize: 24,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  plansSection: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  plansSectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
    textAlign: 'center',
  },
  plansSectionDescription: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    maxWidth: 800,
    marginBottom: 30,
  },
  plansFeatures: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  plansFeaturesColumn: {
    width: 300,
    padding: 20,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  plansFeaturesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
    textAlign: 'center',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureCheck: {
    color: '#8B5A2B',
    fontWeight: 'bold',
    marginRight: 10,
  },
  featureText: {
    color: '#666666',
    flex: 1,
  },
  freeTierSection: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  freeTierTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  freeTierPrice: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#8B5A2B',
    marginBottom: 20,
  },
  freeTierPriceUnit: {
    fontSize: 18,
    color: '#666666',
  },
  freeTierFeatures: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  startFreeButton: {
    backgroundColor: '#F5E1D0',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
  startFreeButtonText: {
    color: '#8B5A2B',
    fontWeight: 'bold',
  },
  notificationText: {
    color: '#666666',
    fontSize: 14,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  copyright: {
    color: '#666666',
    fontSize: 14,
  },
});

export default LandingScreen;