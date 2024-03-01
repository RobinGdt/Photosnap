import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../../utils/icon";
import Button from "../../../ui-components/Button/Button";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 16px;
`;

const LinkWapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`;

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <Logo />
      <LinkWapper>
        <Link to="/">
          <h4>STORIES</h4>
        </Link>
        <Link to="/">
          <h4>FEATURES</h4>
        </Link>
        <Link to="/">
          <h4>PRICING</h4>
        </Link>
      </LinkWapper>
      <Button title="GET AN INVITE" onlight={true} />
    </StyledHeader>
  );
};

export default Header;
