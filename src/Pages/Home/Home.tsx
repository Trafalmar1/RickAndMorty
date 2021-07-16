import { Fragment } from "react";
import MortyImage from "@assets/img/Morty.png";
import { Image, ImageWrapper } from "./styles";

const Home = () => {
  return (
    <Fragment>
      <ImageWrapper>
        <Image src={MortyImage} />
      </ImageWrapper>
    </Fragment>
  );
};
export default Home;
