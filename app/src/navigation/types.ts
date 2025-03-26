import { NavigatorScreenParams } from '@react-navigation/native';

// Auth Stack Navigator Types
export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

// Main Tab Navigator Types
export type MainTabParamList = {
  Home: undefined;
  Stories: undefined;
  NewStory: undefined;
  Profile: undefined;
};

// Onboarding Stack Navigator Types
export type OnboardingStackParamList = {
  Welcome: undefined;
  BasicProfile: undefined;
  MemoryFileInit: undefined;
  FirstStoryPrompt: undefined;
};

// Story Stack Navigator Types
export type StoryStackParamList = {
  StoryList: undefined;
  StoryDetail: { storyId: string };
  StoryEdit: { storyId: string };
  StoryCreate: undefined;
};

// Root Navigator Types
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  Story: NavigatorScreenParams<StoryStackParamList> & { storyId?: string };
};

// Declare global type augmentation for navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}