import styled from "styled-components";
import { COLORS } from "../../../utils/palette";

interface HomeContainerProps {
  reverse?: boolean;
  backgroundimage?: string;
  light?: boolean;
  title: string;
  text: string;
}

const StyledHome = styled.div<{ $reverse?: boolean }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.$reverse ? "8.3fr 6.1fr" : "6.1fr 8.3fr"};
`;

const Item = styled.div<{ $backgroundimage?: string; $light?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.$light ? `${COLORS.WHITE[100]}` : `${COLORS.BLACK[100]}`};
  background-image: url(${(props) => props.$backgroundimage});
  background-size: cover;
  background-position: center;
  padding: 170px 112px 170px 112px;
  h1 {
    color: ${(props) =>
      props.$light ? `${COLORS.BLACK[100]}` : `${COLORS.WHITE[100]}`};
  }
  p {
    color: ${(props) =>
      props.$light ? `${COLORS.BLACK[100]}` : `${COLORS.WHITE[100]}`};
  }
`;

const HomeCardContainer = ({
  reverse,
  backgroundimage,
  light,
  title,
  text,
}: HomeContainerProps): JSX.Element => {
  return (
    <StyledHome $reverse={reverse}>
      {reverse ? (
        <>
          <Item $backgroundimage={backgroundimage} />
          <Item $light={light}>
            <h1>{title}</h1>
            <p>{text}</p>
          </Item>
        </>
      ) : (
        <>
          <Item $light={light}>
            <h1>{title}</h1>
            <p>{text}</p>
          </Item>
          <Item $backgroundimage={backgroundimage} />
        </>
      )}
    </StyledHome>
  );
};

export default HomeCardContainer;
