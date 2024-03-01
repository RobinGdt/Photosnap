import styled from "styled-components";
import { COLORS } from "../../../utils/palette";
import ArrowButton from "../../../ui-components/ArrowButton/ArrowButton";

interface StorieCardProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const StyledStorieCard = styled.div<{ $backgroundimage: string }>`
  background-image: url(${(props) => props.$backgroundimage});
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  justify-content: flex-end;
  text-align: left;

  h3 {
    color: ${COLORS.WHITE[100]};
  }
  span {
    color: ${COLORS.WHITE[100]};
  }
`;

const Divider = styled.div`
  content: "";
  width: 100%;
  height: 1px;
  background-color: ${COLORS.SMOKE[100]};
`;

const Wrapper = styled.div`
  width: 80%;
`;

const StorieCard = ({
  title,
  subtitle,
  backgroundImage,
}: StorieCardProps): JSX.Element => {
  return (
    <StyledStorieCard $backgroundimage={backgroundImage}>
      <Wrapper>
        <h3>{title}</h3>
        <span>{subtitle}</span>
        <Divider />
        <ArrowButton title="READ STORY" />
      </Wrapper>
    </StyledStorieCard>
  );
};

export default StorieCard;
