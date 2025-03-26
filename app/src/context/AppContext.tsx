import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../services/supabase';

// Define types for our memory file and stories
export type MemoryFile = {
  id: string;
  user_id: string;
  basic_info: {
    name?: string;
    age?: number;
    hometown?: string;
    interests?: string[];
  };
  family_structure?: {
    [key: string]: any;
  };
  life_timeline?: {
    [key: string]: any;
  };
  key_events?: {
    [key: string]: any;
  };
  created_at: string;
  updated_at: string;
};

export type Story = {
  id: string;
  user_id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

// Define the shape of our context
type AppContextType = {
  memoryFile: MemoryFile | null;
  stories: Story[];
  isLoading: boolean;
  updateMemoryFile: (data: Partial<MemoryFile>) => Promise<void>;
  createStory: (story: Partial<Story>) => Promise<Story | null>;
  updateStory: (id: string, data: Partial<Story>) => Promise<void>;
  deleteStory: (id: string) => Promise<void>;
};

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [memoryFile, setMemoryFile] = useState<MemoryFile | null>(null);
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load user data when the user changes
  useEffect(() => {
    const loadUserData = async () => {
      if (!user) {
        setMemoryFile(null);
        setStories([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        // Load memory file
        const { data: memoryData, error: memoryError } = await supabase
          .from('memory_files')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (memoryError && memoryError.code !== 'PGRST116') {
          // PGRST116 is the error code for "no rows returned"
          console.error('Error loading memory file:', memoryError);
        }

        if (memoryData) {
          setMemoryFile(memoryData as MemoryFile);
        }

        // Load stories
        const { data: storiesData, error: storiesError } = await supabase
          .from('stories')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (storiesError) {
          console.error('Error loading stories:', storiesError);
        }

        if (storiesData) {
          setStories(storiesData as Story[]);
        }
      } catch (error) {
        console.error('Error in loadUserData:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, [user]);

  // Function to update memory file
  const updateMemoryFile = async (data: Partial<MemoryFile>) => {
    if (!user || !memoryFile) return;

    try {
      const updates = {
        ...data,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('memory_files')
        .update(updates)
        .eq('id', memoryFile.id);

      if (error) throw error;

      // Update local state
      setMemoryFile({
        ...memoryFile,
        ...updates,
      });
    } catch (error) {
      console.error('Error updating memory file:', error);
    }
  };

  // Function to create a new story
  const createStory = async (story: Partial<Story>): Promise<Story | null> => {
    if (!user) return null;

    try {
      const newStory = {
        ...story,
        user_id: user.id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        is_published: story.is_published || false,
      };

      const { data, error } = await supabase
        .from('stories')
        .insert([newStory])
        .select()
        .single();

      if (error) throw error;

      // Update local state
      const createdStory = data as Story;
      setStories([createdStory, ...stories]);
      
      return createdStory;
    } catch (error) {
      console.error('Error creating story:', error);
      return null;
    }
  };

  // Function to update a story
  const updateStory = async (id: string, data: Partial<Story>) => {
    if (!user) return;

    try {
      const updates = {
        ...data,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('stories')
        .update(updates)
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;

      // Update local state
      setStories(
        stories.map((story) =>
          story.id === id ? { ...story, ...updates } : story
        )
      );
    } catch (error) {
      console.error('Error updating story:', error);
    }
  };

  // Function to delete a story
  const deleteStory = async (id: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('stories')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;

      // Update local state
      setStories(stories.filter((story) => story.id !== id));
    } catch (error) {
      console.error('Error deleting story:', error);
    }
  };

  const value = {
    memoryFile,
    stories,
    isLoading,
    updateMemoryFile,
    createStory,
    updateStory,
    deleteStory,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Create a custom hook to use the app context
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};