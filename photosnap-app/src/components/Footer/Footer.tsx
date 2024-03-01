import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import {
  Facebook,
  Instagram,
  Logo,
  Pinterest,
  Twitter,
  Youtube,
} from "../../utils/icon";

const StyledFooter = styled.div`
  background-color: ${COLORS.BLACK[100]};
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SocialWrapper = styled.div`
  display: flex;

  svg {
    stop-color: white;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <SocialContainer>
        <Logo fill={COLORS.WHITE[100]} />
        <SocialWrapper>
          <Facebook />
          <Youtube />
          <Twitter />
          <Pinterest />
          <Instagram />
        </SocialWrapper>
      </SocialContainer>
    </StyledFooter>
  );
};

export default Footer;
