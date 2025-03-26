import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

// Web-specific implementation using HTML
const WebLandingPage = () => {
  const navigation = useNavigation();

  // Function to handle navigation
  const handleNavigation = (screen: 'SignIn' | 'SignUp' | 'ForgotPassword' | 'Welcome') => {
    navigation.navigate('Auth', { screen });
  };

  // Inject CSS and HTML directly for web
  React.useEffect(() => {
    if (Platform.OS === 'web') {
      // Add CSS to the document head
      const style = document.createElement('style');
      style.textContent = `
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #F5F0E8;
          overflow-y: auto;
        }
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: #F5F0E8;
        }
        .logo {
          height: 50px;
        }
        .header-buttons {
          display: flex;
        }
        .btn {
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          margin-left: 10px;
        }
        .btn-signin {
          color: #8B5A2B;
          background: none;
        }
        .btn-signup {
          color: #8B5A2B;
          background-color: #FFFFFF;
          border: 1px solid #8B5A2B;
        }
        .hero {
          position: relative;
          height: 500px;
          color: white;
          text-align: center;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
        }
        .hero-title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .hero-subtitle {
          font-size: 18px;
          max-width: 600px;
        }
        .tagline-section {
          text-align: center;
          padding: 60px 20px;
        }
        .tagline {
          font-size: 32px;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
        }
        .description {
          font-size: 18px;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
        }
        .features-section {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 20px;
          margin-bottom: 40px;
        }
        .feature-card {
          width: 300px;
          padding: 20px;
          margin: 15px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .feature-icon {
          width: 60px;
          height: 60px;
          background-color: #F5F0E8;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 15px;
          font-size: 24px;
        }
        .feature-image {
          width: 200px;
          height: 150px;
          object-fit: contain;
          margin: 0 auto 15px;
        }
        .feature-title {
          font-size: 20px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }
        .feature-description {
          font-size: 16px;
          color: #666;
        }
        .plans-section {
          text-align: center;
          padding: 40px 20px;
        }
        .plans-title {
          font-size: 32px;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
        }
        .plans-description {
          font-size: 18px;
          color: #666;
          max-width: 800px;
          margin: 0 auto 40px;
        }
        .plans-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .plans-column {
          width: 300px;
          padding: 20px;
          margin: 15px;
          background-color: white;
          border-radius: 10px;
        }
        .plans-column-title {
          font-size: 20px;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
          text-align: center;
        }
        .feature-row {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          text-align: left;
        }
        .feature-check {
          color: #8B5A2B;
          font-weight: bold;
          margin-right: 10px;
        }
        .feature-text {
          color: #666;
        }
        .pricing-section {
          text-align: center;
          padding: 20px;
          margin: 20px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .pricing-title {
          font-size: 24px;
          font-weight: bold;
          color: #333;
          margin-bottom: 15px;
        }
        .pricing-price {
          font-size: 36px;
          font-weight: bold;
          color: #8B5A2B;
          margin-bottom: 20px;
        }
        .pricing-unit {
          font-size: 18px;
          color: #666;
        }
        .start-free-btn {
          background-color: #F5E1D0;
          color: #8B5A2B;
          font-weight: bold;
          padding: 12px 30px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          margin-bottom: 15px;
        }
        .notification-text {
          color: #666;
          font-size: 14px;
        }
        footer {
          text-align: center;
          padding: 20px;
          color: #666;
          font-size: 14px;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  if (Platform.OS !== 'web') {
    return null;
  }

  // Return a div that will be rendered as HTML
  return (
    <div style={{ display: 'contents' }}>
      <div className="container">
        <header>
          <img 
            src="https://via.placeholder.com/150x50" 
            alt="MemoryStitcher Logo" 
            className="logo" 
          />
          <div className="header-buttons">
            <button 
              className="btn btn-signin" 
              onClick={() => handleNavigation('SignIn')}
            >
              Sign In
            </button>
            <button 
              className="btn btn-signup" 
              onClick={() => handleNavigation('SignUp')}
            >
              Sign Up
            </button>
          </div>
        </header>

        <div className="hero">
          <img 
            src="https://images.pexels.com/photos/3818956/pexels-photo-3818956.jpeg" 
            alt="Family sharing memories" 
            className="hero-image" 
          />
          <div className="hero-overlay">
            <h1 className="hero-title">Weave Your Moments Into a Legacy</h1>
            <p className="hero-subtitle">
              Capture and share precious memories with loved ones. Start preserving your legacy today.
            </p>
          </div>
        </div>

        <div className="tagline-section">
          <h2 className="tagline">Tell Your Story Well</h2>
          <p className="description">
            MemoryStitcher is your personal AI-powered storytelling companion, helping you craft meaningful family narratives through guided conversations and thoughtful questions.
          </p>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">✏️</div>
            <h3 className="feature-title">Guided Writing</h3>
            <p className="feature-description">
              Interactive conversations that help you unlock and shape your memories
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3 className="feature-title">Family Connection</h3>
            <p className="feature-description">
              Share stories with loved ones and preserve your family's legacy
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3 className="feature-title">Living Library</h3>
            <p className="feature-description">
              Build a collection of meaningful stories that grows with your family
            </p>
          </div>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <img 
              src="https://memorystitcher.com/lovable-uploads/bd41d744-b989-432b-9eaa-f484190d1536.png" 
              alt="Collaborative Storytelling" 
              className="feature-image" 
            />
            <h3 className="feature-title">Collaborative Storytelling</h3>
            <p className="feature-description">
              Multiple family members can contribute to the same story, adding their unique perspectives
            </p>
          </div>
          
          <div className="feature-card">
            <img 
              src="https://memorystitcher.com/lovable-uploads/14f2a7aa-5cf8-43f1-94f6-92bb2fbc17e3.png" 
              alt="Story Incentives" 
              className="feature-image" 
            />
            <h3 className="feature-title">Story Incentives</h3>
            <p className="feature-description">
              Encourage storytelling through gift card contributions and family rewards
            </p>
          </div>
          
          <div className="feature-card">
            <img 
              src="https://memorystitcher.com/lovable-uploads/d31cdefd-326f-492c-b5be-a71ce6f4bcba.png" 
              alt="Private & Secure" 
              className="feature-image" 
            />
            <h3 className="feature-title">Private & Secure</h3>
            <p className="feature-description">
              Control who sees your stories with flexible privacy settings for family sharing
            </p>
          </div>
        </div>

        <div className="plans-section">
          <h2 className="plans-title">Family Plans Coming Soon</h2>
          <p className="plans-description">
            Experience the power of shared storytelling. Connect with up to 8 family members, collaborate on stories, and build your family's legacy together.
          </p>
          
          <div className="plans-features">
            <div className="plans-column">
              <h3 className="plans-column-title">Collaborative Features</h3>
              <div className="feature-row">
                <span className="feature-check">✓</span>
                <span className="feature-text">Share stories with up to 8 family members</span>
              </div>
              <div className="feature-row">
                <span className="feature-check">✓</span>
                <span className="feature-text">Add multiple perspectives to family stories</span>
              </div>
              <div className="feature-row">
                <span className="feature-check">✓</span>
                <span className="feature-text">Create private family spaces</span>
              </div>
            </div>
            
            <div className="plans-column">
              <h3 className="plans-column-title">Enhanced Features</h3>
              <div className="feature-row">
                <span className="feature-check">✓</span>
                <span className="feature-text">Advanced story organization</span>
              </div>
              <div className="feature-row">
                <span className="feature-check">✓</span>
                <span className="feature-text">Unlimited story storage</span>
              </div>
              <div className="feature-row">
                <span className="feature-check">✓</span>
                <span className="feature-text">Priority support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-section">
          <h2 className="pricing-title">Start Free Today</h2>
          <p className="pricing-price">$0<span className="pricing-unit">/month</span></p>
          
          <div className="feature-row">
            <span className="feature-check">✓</span>
            <span className="feature-text">5 personal stories</span>
          </div>
          <div className="feature-row">
            <span className="feature-check">✓</span>
            <span className="feature-text">Basic editor</span>
          </div>
          <div className="feature-row">
            <span className="feature-check">✓</span>
            <span className="feature-text">Private storage</span>
          </div>
          
          <button 
            className="start-free-btn" 
            onClick={() => handleNavigation('SignUp')}
          >
            Start Free
          </button>
          
          <p className="notification-text">
            Be the first to know when family plans launch
          </p>
        </div>

        <footer>
          <p>Copyright © 2025 MemoryStitcher. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

// Native implementation for mobile platforms
const NativeLandingScreen = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.logo}>MemoryStitcher</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ ...styles.button, marginRight: 10 }}
              onPress={() => navigation.navigate('Auth', { screen: 'SignIn' })}
            >
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Auth', { screen: 'SignUp' })}
            >
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Weave Your Moments Into a Legacy</Text>
          <Text style={styles.heroSubtitle}>
            Capture and share precious memories with loved ones. Start preserving
            your legacy today.
          </Text>
        </View>

        <View style={styles.features}>
          <Text style={styles.tagline}>Tell Your Story Well</Text>
          <Text style={styles.description}>
            MemoryStitcher is your personal AI-powered storytelling companion, helping you craft meaningful family narratives through guided conversations and thoughtful questions.
          </Text>
        </View>

        {/* Rest of the native implementation */}
      </ScrollView>
    </View>
  );
};

// Main component that conditionally renders based on platform
const LandingScreen = () => {
  return Platform.OS === 'web' ? <WebLandingPage /> : <NativeLandingScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
  },
  contentContainer: {
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: '#8B5A2B',
  },
  signInText: {
    color: 'white',
  },
  signUpText: {
    color: 'white',
  },
  hero: {
    padding: 20,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  features: {
    padding: 20,
  },
  tagline: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LandingScreen;