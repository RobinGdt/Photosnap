import styled from "styled-components";
import { COLORS } from "../../utils/palette";

interface ButtonProps {
  title: string;
  onlight?: boolean;
}

const Button = styled.button<{ $onlight?: boolean }>`
  background-color: ${(props) =>
    props.$onlight ? `${COLORS.BLACK[100]}` : `${COLORS.WHITE[100]}`};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px 0 24px;
  h4 {
    color: ${(props) =>
      props.$onlight ? `${COLORS.WHITE[100]}` : `${COLORS.BLACK[100]}`};
  }
`;

const Header = ({ title, onlight }: ButtonProps): JSX.Element => {
  return (
    <Button $onlight={onlight}>
      <h4>{title}</h4>
    </Button>
  );
};

export default Header;
