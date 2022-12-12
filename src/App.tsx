import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/global';
import {HomePageContainer} from './pages/home';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
        <HomePageContainer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;