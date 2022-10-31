import { ThemeProvider } from 'styled-components'

import { ContextProvider } from './contexts/Context';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { defaultTheme } from './css/themes/default';
import { GlobalStyle } from './css/global';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <ToastContainer />
        <GlobalStyle />
      </ThemeProvider>
    </ContextProvider>
  )
}

export default App
