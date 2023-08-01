import styled, { StyledComponent } from "@emotion/styled";
import { ExecutionProps, createGlobalStyle } from "styled-components";
import { card, cardHover, main2 } from "../main/main";


/** 
 * Global style with global definitions
 * @type React.NamedExoticComponent<ExecutionProps & object>
 */

export const Global: React.NamedExoticComponent<ExecutionProps & object> = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: ${main2};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${card};
        width: 20px;
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${cardHover};
    }
`;


/** 
 * Container component that have an style to centralize the content
 * @type StyledComponent<Object, Object, Object>
 */

export const Container: StyledComponent<Object, Object, Object> = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;