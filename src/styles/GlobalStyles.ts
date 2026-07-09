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
        background:
                linear-gradient(
                        180deg,
                        #0a0a0f 0%,
                        #0d0d14 35%,
                        #10101a 65%,
                        #0a0a0f 100%
                );
        color: white;
        overflow-x: hidden;
    }
    
    #root {
        min-height: 100vh;
    }
`;