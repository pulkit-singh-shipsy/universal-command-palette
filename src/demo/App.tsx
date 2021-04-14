import React from 'react';
import './App.css';
import QuicklyClient from './QuicklyClient';
import ThemeProvider from './theming/ThemeProvider';

function App() {
  return (
      <ThemeProvider>
        <QuicklyClient>
          My app
        </QuicklyClient>
      </ThemeProvider>
  );
}

export default App;
