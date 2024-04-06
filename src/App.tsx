import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Router } from './Router'
import { ProductContextProvider } from './contexts/ProductContext'

export function App() {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
         <ProductContextProvider>
            <Router />
        </ProductContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
    
    </>
  )
}