import { Fragment } from "react";
import MortyImage from "@assets/img/Morty.png";
import MortyLow from "@assets/img/Morty_low.jpg";
import { Container, ImageWrapper } from "./styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <ImageWrapper>
          <LazyLoadImage
            placeholderSrc={MortyLow}
            height="100%"
            src={MortyImage}
            effect="blur"
          />
        </ImageWrapper>
      </Container>
    </Fragment>
  );
};
export default Home;
