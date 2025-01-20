import { initializeApp } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBJdEAptW8me9WvenwuL1DJjGc81_fUrtk',
  authDomain: 'assistant-a4d1e.firebaseapp.com',
  projectId: 'assistant-a4d1e'
};

export const firebaseApp = initializeApp(firebaseConfig);