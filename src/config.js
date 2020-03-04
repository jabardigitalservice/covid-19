export const appConfig = {
  version: process.env.VUE_APP_VERSION
}

export const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
  publicVapidKey: process.env.VUE_APP_FIREBASE_PUBLIC_VAPID_KEY
}

export const PHONE_NUMBERS = {
  KEMENKES_HOME: '021-5210-411',
  KEMENKES_PHONE: '0812 12 12 3119',
  DINKES_JABAR: '0811 2093 306'
}
