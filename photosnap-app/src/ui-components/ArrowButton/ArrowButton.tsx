import styled from "styled-components";
import { Arrow } from "../../utils/icon";
import { COLORS } from "../../utils/palette";

interface ArrowButtonProps {
  dark?: boolean;
  title: string;
}

const StyledArrowButton = styled.button<{ $dark?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: 100%;
  padding: 0;

  h4 {
    color: ${(props) =>
      props.$dark ? `${COLORS.BLACK[100]}` : `${COLORS.WHITE[100]}`};
  }
`;

const ArrowButton = ({ dark, title }: ArrowButtonProps): JSX.Element => {
  return (
    <StyledArrowButton $dark={dark}>
      <h4>{title}</h4>
      <Arrow stroke={dark ? COLORS.BLACK[100] : COLORS.WHITE[100]} />
    </StyledArrowButton>
  );
};

export default ArrowButton;
