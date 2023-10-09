import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

body {
    width: 100%;
    min-height: 100vh;
}

a, button {
    cursor: pointer;
}

.Titulo {
    color: #1D3557;
    font-size: 260%;
}

.paragrafo1 {
    font-family: 'Roboto';
    font-size: 140%;
    margin-top: 5%;
    font-weight: 400;
}

.paragrafo2 {
    font-family: 'Roboto';
    font-size: 140%;
    margin-top: 5%;
    font-weight: 300;
}
`