import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: "Space Grotesk", sans-serif;
        background: #0B0D12;
        color: white;
        overflow-x: hidden;
    }
    
    #root {
        min-height: 100vh;
    }
`;