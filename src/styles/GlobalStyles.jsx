import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: "Open Sans", sans-serif;
        scroll-behavior: smooth;
    }

    body {
        user-select: none;
        margin: 0;
        padding: 20px 40px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::-webkit-scrollbar {
            width: 8px; /* width of the entire scrollbar */
        }

        &::-webkit-scrollbar-track {
            background: #ff287630; /* color of the tracking area */
            border-radius: 10px; /* roundness of the scroll thumb */
        }

        &::-webkit-scrollbar-thumb {
            background-color: #ff2876; /* color of the scroll thumb */
            border-radius: 10px; /* roundness of the scroll thumb */
        }
    }
`;
