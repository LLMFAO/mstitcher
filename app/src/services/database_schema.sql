-- Database schema for MemoryStitcher

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create memory_files table
CREATE TABLE IF NOT EXISTS memory_files (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  basic_info JSONB DEFAULT '{}',
  family_structure JSONB DEFAULT '{}',
  life_timeline JSONB DEFAULT '{}',
  key_events JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create stories table
CREATE TABLE IF NOT EXISTS stories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create story_conversations table to store the raw conversation data
CREATE TABLE IF NOT EXISTS story_conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  story_id UUID NOT NULL REFERENCES stories(id) ON DELETE CASCADE,
  conversation JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create categories table for story categorization
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default categories
INSERT INTO categories (name, description)
VALUES
  ('Childhood Memories', 'Stories from your early years'),
  ('Career Journey', 'Professional experiences and milestones'),
  ('Relationships', 'Stories about important people in your life'),
  ('Historical Context', 'Your experiences during major historical events'),
  ('Personal Philosophy', 'Life lessons, values, and beliefs')
ON CONFLICT (name) DO NOTHING;

-- Set up Row Level Security (RLS) policies

-- Memory Files policies
ALTER TABLE memory_files ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own memory files"
  ON memory_files FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own memory files"
  ON memory_files FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own memory files"
  ON memory_files FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own memory files"
  ON memory_files FOR DELETE
  USING (auth.uid() = user_id);

-- Stories policies
ALTER TABLE stories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own stories"
  ON stories FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own stories"
  ON stories FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own stories"
  ON stories FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own stories"
  ON stories FOR DELETE
  USING (auth.uid() = user_id);

-- Story Conversations policies
ALTER TABLE story_conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own story conversations"
  ON story_conversations FOR SELECT
  USING (auth.uid() = (SELECT user_id FROM stories WHERE id = story_id));

CREATE POLICY "Users can insert their own story conversations"
  ON story_conversations FOR INSERT
  WITH CHECK (auth.uid() = (SELECT user_id FROM stories WHERE id = story_id));

CREATE POLICY "Users can update their own story conversations"
  ON story_conversations FOR UPDATE
  USING (auth.uid() = (SELECT user_id FROM stories WHERE id = story_id));

CREATE POLICY "Users can delete their own story conversations"
  ON story_conversations FOR DELETE
  USING (auth.uid() = (SELECT user_id FROM stories WHERE id = story_id));

-- Categories policies (read-only for users)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  USING (true);

-- Create functions and triggers

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for memory_files
CREATE TRIGGER update_memory_files_updated_at
BEFORE UPDATE ON memory_files
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Trigger for stories
CREATE TRIGGER update_stories_updated_at
BEFORE UPDATE ON stories
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Trigger for story_conversations
CREATE TRIGGER update_story_conversations_updated_at
BEFORE UPDATE ON story_conversations
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();