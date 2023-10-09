import styled from "styled-components"

export const StylesHeader = styled.header `
    padding: 1.4% 0;
    display: flex;
    align-items: center;


.titulo {
    margin: 0% 44% 0% 6%;
    font-size: 190%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 30%;
    color: #457B9D;
    transition: 0.2s;
}

.navegacao {
    display: flex;
    align-items: center;
    gap: 5%;
}

.linkNavegaçao {
    font-size: 100%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #457B9D;
    white-space: nowrap;
    transition: 0.2s;
}

.ultimoLink {
    color: #ffffff;
    background-color: #1D3557;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    Padding: 4% 9%;
    border-radius: 13%;
    box-shadow: 1px 4px 10px 1px rgba(0, 0, 0, 0.6);
}

.linkNavegaçao:hover, .titulo:hover {
    scale: 1.1;
}
`