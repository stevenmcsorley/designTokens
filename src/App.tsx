import React, { useState } from 'react';
import MembersList from './cmps/MembersList';
import styles from './App.module.css';
import * as designTokens from './designTokens';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const colorScheme = isDarkMode ? designTokens.colorScheme.dark : designTokens.colorScheme.light;

  return (
    <div
      id='App'
      className={`${isDarkMode ? styles.darkMode : ''}`}
      style={{ background: colorScheme.background, color: colorScheme.text }}
    >
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <MembersList />
    </div>
  );
}

export default App;
