import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    font-family: 'Inter', sans-serif;
    font-size: 14px;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
}

button{
    border: none;
    outline: none;
    font-family: inherit;
    cursor: pointer;
}

input{
    border: none;
    outline: none;
    font-family: inherit;
}

`;

export default GlobalStyle;
