// Configuración de variables de entorno
export const env = {
  firebase: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBMbC2s8Od_rixh0POAZOTIv5VvIj5k1JU",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "react-portfolioweb.firebaseapp.com",
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://react-portfolioweb-default-rtdb.firebaseio.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "react-portfolioweb",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "react-portfolioweb.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "466783937622",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:466783937622:web:78a03f1c3bd03bc9ffc7f7",
  }
} as const;
