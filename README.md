```markdown
# Portfolio web

This project is a multi-language React application built with Vite, using TypeScript and SASS. It integrates Firebase for project data retrieval and follows linter rules for code quality.

> It has two layouts, one with two themes and another with a fixed theme.
Each one is in a corresponding branch: `main` `dev-nd`
 
## Features

- Built with Vite for fast development and optimized production builds
- React with TypeScript for robust
- SASS for enhanced styling capabilities
- Firebase integration for project data management
- Multi-language support
- Linter rules for consistent code style

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 20 or highter)
- npm or yarn
- A Firebase project set up

## Installation

1. Clone the repository:
```

git clone [https://github.com/RichardM20/Portfolio](https://github.com/RichardM20/Portfolio)

```plaintext

2. Navigate to the project directory:
```

cd Portfolio

```plaintext

3. Install dependencies:
```

npm install

```plaintext
or
```

yarn install

```plaintext

4. Create a `.env.local` file in the root directory and add your Firebase configuration:
```

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

```plaintext

## Usage

To start the development server:

```

npm run dev

```plaintext
or
```

yarn dev

```plaintext

To build for production:

```

npm run build

```plaintext
or
```

yarn build

```plaintext

## Linting

This project uses ESLint for code linting. To run the linter:

```

npm run lint

```plaintext
or
```

yarn lint

```plaintext

## Multi-language Support

This project supports multiple languages. Language files are located in the `src/locales` directory. To add a new language, create a new JSON file with the appropriate language code (e.g., `es.json` for Spanish).

## Firebase Integration

This project uses Firebase for retrieving project data. Ensure you have set up your Firebase project and added the configuration to the `.env` file as described in the Installation section.

## Contributing

Contributions to this project are welcome. Please ensure you follow the established code style and linting rules.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request


This README provides a comprehensive overview of your project, including its features, setup instructions, usage guidelines, and contribution process. It also highlights the key technologies and tools used in your project, such as Vite, React with TypeScript, SASS, Firebase integration, and multi-language support.
