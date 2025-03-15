# MemoryStitcher

MemoryStitcher is a mobile-first application with web support that uses AI-powered conversations to help users capture their personal and family stories in an engaging, easy-to-use format. The app transforms chat-based interactions into beautifully crafted narratives that can be shared among family members, preserving important memories and strengthening connections across generations.

## Features

- **AI-Powered Conversation & Narrative Creation**: Intelligent chat prompts that adapt based on previous stories and automatic transformation of conversations into polished narratives.
- **Multi-Generational Engagement**: Family members can prompt for stories or react to them, with shared narrative spaces for family members.
- **Accessibility & Ease of Use**: Mobile-first design with web support, interface designed for users of all technical abilities.
- **Quality of Output**: Professionally crafted narratives from casual conversations, preserving authentic voice while improving readability.

## Technology Stack

- **Frontend**: React Native Web (for cross-platform compatibility)
- **Backend**: Supabase (authentication and database)
- **Hosting**: Netlify with GitHub integration
- **AI**: Flexible LLM implementation with abstraction layer
- **Payment**: Stripe (future implementation)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account
- Netlify account (for deployment)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/memory-stitcher.git
   cd memory-stitcher/app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Set up the database schema:
   - Go to your Supabase project
   - Navigate to the SQL Editor
   - Run the SQL script in `src/services/database_schema.sql`

5. Start the development server:
   ```
   npm start
   ```

## Project Structure

```
app/
├── assets/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── screens/       # Screen components
│   ├── navigation/    # Navigation configuration
│   ├── context/       # React context providers
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API and service integrations
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript type definitions
│   └── constants/     # App constants
├── App.tsx            # Main app component
└── index.ts           # Entry point
```

## Development

### Running on Web

```
npm run web
```

### Running on iOS Simulator

```
npm run ios
```

### Running on Android Emulator

```
npm run android
```

## Deployment

### Deploying to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `web-build`
4. Set up environment variables in Netlify dashboard

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Supabase](https://supabase.io/)
- [Netlify](https://www.netlify.com/)