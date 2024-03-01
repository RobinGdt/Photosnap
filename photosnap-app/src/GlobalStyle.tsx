import { COLORS } from "./utils/palette";
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle<{ darkMode?: boolean }>`
  :root {
    --white-100: ${COLORS.WHITE[100]};
    --black-100: ${COLORS.BLACK[100]};
    --smoke-100: ${COLORS.SMOKE[100]};
    --12px: 0.75rem;
    --14px: 0.875rem;
    --16px: 1rem;
    --18px: 1.125rem;
    --20px: 1.25rem;
    --24px: 1.5rem;
    --30px: 1.85rem;
    --36px: 2.25rem;
    --48px: 3rem;
    --96px: 6rem;
  }

  html,
  body,
  #root {
    height: 100%;
  }
  body {
    scroll-behavior: smooth;
  }
  body.active {
    overflow: hidden;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  button {
    border: none;
    cursor: pointer;
  }
  p,
  a,
  li,
  span,
  h1,
  h3,
  h4,
  h5,
  label,
  h6 {
    overflow-wrap: break-word;
    text-decoration: none;
    color: var(--black-100);
  }
  #root {
    font-family: "DM Sans", sans-serif;
  }
`;

export default GlobalStyles;
