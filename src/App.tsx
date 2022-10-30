import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { defaultTheme } from './css/themes/default';
import { GlobalStyle } from './css/global';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
