# MemoryStitcher

MemoryStitcher is a mobile-first application with web support that uses AI-powered conversations to help users capture their personal and family stories in an engaging, easy-to-use format. The app transforms chat-based interactions into beautifully crafted narratives that can be shared among family members, preserving important memories and strengthening connections across generations.

## Project Overview

This repository contains the code for the MemoryStitcher application, which is built using React Native Web for cross-platform compatibility. The app is designed to be accessible on both web and mobile platforms, with a focus on providing a seamless user experience across devices.

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
   cd memory-stitcher
   ```

2. Install dependencies:
   ```
   cd app
   npm install
   ```

3. Create a `.env` file in the app directory with the following variables:
   ```
   EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Set up the database schema:
   - Go to your Supabase project
   - Navigate to the SQL Editor
   - Run the SQL script in `app/src/services/database_schema.sql`

5. Start the development server:
   ```
   npm start
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
├── web/               # Web-specific files
├── App.tsx            # Main app component
└── index.ts           # Entry point
```

## Features

- **User Authentication**: Sign up, sign in, and password reset functionality
- **Onboarding**: Guided onboarding process for new users
- **Story Creation**: AI-powered conversation interface for creating stories
- **Story Library**: Collection of user's stories with organization options
- **Family Sharing**: Share stories with family members (coming soon)
- **Theme Support**: Light and dark mode

## Deployment

### Deploying to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure the build settings:
   - Build command: `cd app && npm install && npm run build`
   - Publish directory: `app/web-build`
4. Set up environment variables in Netlify dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Supabase](https://supabase.io/)
- [Netlify](https://www.netlify.com/)