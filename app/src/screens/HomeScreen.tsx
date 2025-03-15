import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabParamList, RootStackParamList } from '../navigation/types';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

// Placeholder for empty state illustration
const EmptyStateIllustration = () => (
  <View style={styles.emptyIllustration}>
    <Text style={styles.emptyIllustrationText}>📚</Text>
  </View>
);

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { user } = useAuth();
  const { stories, isLoading } = useApp();
  const { isDarkMode } = useTheme();
  
  const recentStories = stories.slice(0, 3);
  const hasStories = stories.length > 0;

  const handleCreateStory = () => {
    navigation.navigate('NewStory');
  };

  const handleViewAllStories = () => {
    navigation.navigate('Stories');
  };

  const handleStoryPress = (storyId: string) => {
    navigation.navigate('Story', { 
      screen: 'StoryDetail', 
      params: { storyId } 
    });
  };

  const renderStoryItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.storyCard}
      onPress={() => handleStoryPress(item.id)}
    >
      <View style={styles.storyCardContent}>
        <Text style={styles.storyTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.storyPreview} numberOfLines={3}>
          {item.content.substring(0, 100)}...
        </Text>
        <View style={styles.storyMeta}>
          <Text style={styles.storyCategory}>{item.category}</Text>
          <Text style={styles.storyDate}>
            {new Date(item.created_at).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      
      <View style={[styles.header, isDarkMode && styles.headerDark]}>
        <Text style={[styles.headerTitle, isDarkMode && styles.headerTitleDark]}>
          Welcome, {user?.email?.split('@')[0] || 'Storyteller'}
        </Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={[styles.welcomeTitle, isDarkMode && styles.welcomeTitleDark]}>
            Tell Your Story Well
          </Text>
          <Text style={[styles.welcomeSubtitle, isDarkMode && styles.welcomeSubtitleDark]}>
            Capture and preserve your memories through guided conversations.
          </Text>
          
          <TouchableOpacity
            style={styles.createStoryButton}
            onPress={handleCreateStory}
          >
            <Text style={styles.createStoryButtonText}>Start a New Story</Text>
          </TouchableOpacity>
        </View>
        
        {/* Recent Stories Section */}
        <View style={styles.recentStoriesSection}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
              Recent Stories
            </Text>
            {hasStories && (
              <TouchableOpacity onPress={handleViewAllStories}>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            )}
          </View>
          
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Loading stories...</Text>
            </View>
          ) : hasStories ? (
            <FlatList
              data={recentStories}
              renderItem={renderStoryItem}
              keyExtractor={(item) => item.id}
              horizontal={false}
              scrollEnabled={false}
              contentContainerStyle={styles.storiesList}
            />
          ) : (
            <View style={styles.emptyState}>
              <EmptyStateIllustration />
              <Text style={[styles.emptyStateTitle, isDarkMode && styles.emptyStateTitleDark]}>
                No Stories Yet
              </Text>
              <Text style={[styles.emptyStateText, isDarkMode && styles.emptyStateTextDark]}>
                Start creating your first story to build your personal library.
              </Text>
            </View>
          )}
        </View>
        
        {/* Tips Section */}
        <View style={styles.tipsSection}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
            Storytelling Tips
          </Text>
          
          <View style={styles.tipCard}>
            <Text style={styles.tipTitle}>Be Specific</Text>
            <Text style={styles.tipText}>
              Include sensory details that bring your memories to life. What did you see, hear, smell, taste, or feel?
            </Text>
          </View>
          
          <View style={styles.tipCard}>
            <Text style={styles.tipTitle}>Focus on Moments</Text>
            <Text style={styles.tipText}>
              The most powerful stories often come from small, meaningful moments rather than trying to capture everything.
            </Text>
          </View>
          
          <View style={styles.tipCard}>
            <Text style={styles.tipTitle}>Share Your Emotions</Text>
            <Text style={styles.tipText}>
              Don't just describe what happened—share how it made you feel and why it matters to you.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
  },
  containerDark: {
    backgroundColor: '#2D2D2D',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerDark: {
    backgroundColor: '#1A1A1A',
    borderBottomColor: '#333333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  headerTitleDark: {
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  welcomeSection: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
  welcomeTitleDark: {
    color: '#FFFFFF',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  welcomeSubtitleDark: {
    color: '#BBBBBB',
  },
  createStoryButton: {
    backgroundColor: '#8B5A2B',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  createStoryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentStoriesSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  sectionTitleDark: {
    color: '#FFFFFF',
  },
  viewAllText: {
    color: '#8B5A2B',
    fontWeight: '600',
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  loadingText: {
    color: '#666666',
  },
  storiesList: {
    paddingBottom: 10,
  },
  storyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  storyCardContent: {
    padding: 15,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  storyPreview: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },
  storyMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storyCategory: {
    fontSize: 12,
    color: '#8B5A2B',
    fontWeight: '600',
  },
  storyDate: {
    fontSize: 12,
    color: '#999999',
  },
  emptyState: {
    padding: 30,
    alignItems: 'center',
  },
  emptyIllustration: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F0E6D8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  emptyIllustrationText: {
    fontSize: 40,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  emptyStateTitleDark: {
    color: '#FFFFFF',
  },
  emptyStateText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  emptyStateTextDark: {
    color: '#BBBBBB',
  },
  tipsSection: {
    padding: 20,
  },
  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#666666',
  },
});

export default HomeScreen;