# Haus of Cards - Frontend README

## Description

This is the frontend part of the **Cards** project. It is built using React and Vite to provide a fast and modern user experience for creating and managing game cards.

## Project Structure

```
frontend/
├── public/             # Static files (index.html, assets)
├── src/                # Main source code
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components (e.g., Home, About)
│   ├── services/       # API calls using Axios
│   ├── styles/         # CSS/SASS stylesheets
│   ├── assets/         # Images and other static resources
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Entry point for the application
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # Frontend project information
```

## Getting Started

### 1. Install Dependencies

Navigate to the frontend directory in your terminal and install the required packages:

```
cd frontend
npm install
```

### 2. Run the Development Server

Start the Vite development server with:

```
npm run dev
```

The application will be available at **http://localhost:5173**.

### 3. Build for Production

To create an optimized build for production:

```
npm run build
```

The build output will be generated in the `dist/` folder.

## Technologies Used

- **React**: Component-based library for building the UI
- **Vite**: Fast build tool and development server
- **Axios**: For handling API requests
- **CSS/SASS**: Styling the application

## Scripts

The following scripts are available in `package.json`:

- **`npm run dev`**: Start the development server
- **`npm run build`**: Build for production
- **`npm run preview`**: Preview the production build

## Authors

- **Kriss**
- **Dennis**
