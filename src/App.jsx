import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <ThemeProvider>
      <ProfilePage />
    </ThemeProvider>
  );
}

export default App;
