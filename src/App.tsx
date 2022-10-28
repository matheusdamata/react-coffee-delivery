import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { defaultTheme } from './css/themes/default';
import { GlobalStyle } from './css/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
