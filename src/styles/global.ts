import { createGlobalStyle } from 'styled-components';
import './../assets/font/index.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    html {
        font-size: 10px;    
    }
    
    body {
        font-size: 1.6rem;
        line-height: 1.9rem;
        font-family: "Inter", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 1.6rem;
        line-height: 1.9rem;
    }
`
