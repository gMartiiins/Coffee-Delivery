import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background-color: ${(props) => props.theme['background']};  
    min-width: 578px;
   }
  
  body, input, textarea, button {
  
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`
