import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const Typography = styled.createGlobalStyle`
  html {
    color: var(--black-100);
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 4.17px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  h4 {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  p {
    font-size: 15px;
    font-weight: 400;
  }
  span {
    font-size: 15px;
    font-weight: 400;
  }
  a {
    text-decoration: none;
    font-size: 15px;
    font-weight: 400;
  }

  @media (max-width: 740px) {
    h1 {
      font-size: var(--48px);
    }
    h2 {
      font-size: var(--30px);
    }
    h3 {
      font-size: var(--16px);
    }
    h4 {
      font-size: var(--16px);
    }
    h5 {
      font-size: var(--14px);
    }
    h6 {
      font-size: var(--14px);
    }
    p {
      font-size: var(--16px);
    }
    span {
      font-size: var(--16px);
    }
  }
`;

export default Typography;
