import React from 'react';
import './App.css';
import QuicklyClient from './QuicklyClient';
import ThemeProvider from './theming/ThemeProvider';

function App() {
  const hotkey = 'ctrl+shift+l';
  return (
      <ThemeProvider>
        <QuicklyClient hotkey={hotkey}>
          {hotkey}
        </QuicklyClient>
      </ThemeProvider>
  );
}

export default App;
