import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* Context Provider -> BrowserRouter */}
        <Router />
      </BrowserRouter>
      <GlobalStyle />
      {/* the order is not important, but it must be placed inside the ThemeProvider */}
    </ThemeProvider>
  )
}
