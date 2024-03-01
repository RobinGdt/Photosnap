import styled from "styled-components";
import createAndShare from "../../starter-code/assets/home/desktop/create-and-share.jpg";
import HomeCardContainer from "./HomeCardContainer/HomeCardContainer";
import beautifulStories from "../../starter-code/assets/home/desktop/beautiful-stories.jpg";
import designedForEveryone from "../../starter-code/assets/home/desktop/designed-for-everyone.jpg";
import mountains from "../../starter-code/assets/stories/desktop/mountains.jpg";
import heightinstories from "../../starter-code/assets/stories/desktop/18-days-voyage.jpg";
import sunset from "../../starter-code/assets/stories/desktop/cityscapes.jpg";
import architectural from "../../starter-code/assets/stories/desktop/architecturals.jpg";
import StorieCard from "./StorieCard/StorieCard";
import { Embed, NoLimit, Responsive } from "../../utils/icon";

const StyledHome = styled.div`
  width: 100%;
`;

const StoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 4fr;
`;

const Container = styled.div`
  display: flex;
  padding: 150px;
  gap: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Home = (): JSX.Element => {
  return (
    <StyledHome>
      <HomeCardContainer
        title="CREATE AND SHARE YOUR PHOTO STORIES."
        text="Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others."
        backgroundimage={createAndShare}
      />
      <HomeCardContainer
        title="BEAUTIFUL STORIES EVERY TIME"
        text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        backgroundimage={beautifulStories}
        light={true}
        reverse={true}
      />
      <HomeCardContainer
        title="DESIGNED FOR EVERYONE"
        text="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
        backgroundimage={designedForEveryone}
        light={true}
      />
      <StoriesWrapper>
        <StorieCard
          title="Mountains"
          subtitle="by John Appleseed"
          backgroundImage={mountains}
        />
        <StorieCard
          title="Sunset Cityscapes"
          subtitle="by Benjamin Cruz"
          backgroundImage={sunset}
        />
        <StorieCard
          title="18 Days Voyage"
          subtitle="by Alexei Borodin"
          backgroundImage={heightinstories}
        />
        <StorieCard
          title="Architecturals"
          subtitle="by Samantha Brooke"
          backgroundImage={architectural}
        />
      </StoriesWrapper>
      <Container>
        <Content>
          <Responsive />
          <h3>100% Responsive</h3>
          <p>
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </Content>
        <Content>
          <NoLimit />
          <h3>No Photo Upload Limit</h3>
          <p>
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </Content>
        <Content>
          <Embed />
          <h3>Available to Embed</h3>
          <p>
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </Content>
      </Container>
    </StyledHome>
  );
};

export default Home;
