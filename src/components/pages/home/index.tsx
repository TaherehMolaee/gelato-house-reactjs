import React, { type JSX } from "react";
import AcceptanceBanner from "../../base/acceptanceBanner";
import ImageSlider from "../../base/imageSlider";
import Container from "../../base/container";
import Popup from "../../base/popup";
import Button from "../../base/button";
import { ArrowDown } from "../../icons/ArrowDown";
import { Slider } from "./sections/slider";
import Information from "./sections/information";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <AcceptanceBanner />
      <Container>
      <Slider />
      <Information />
      </Container>
    </>
  );
};

export default HomePage;
