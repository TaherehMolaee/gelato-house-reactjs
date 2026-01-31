import React, { type JSX } from "react";
import ImageSlider from "../../../../base/imageSlider";

export const Slider: React.FC = ():JSX.Element => {
  return (
    <ImageSlider
      slidesPerView={1}
      slides={[
        {
          id: 1,
          src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/3e2awcrw.cfl.jpg",
          alt: "gelato",
        },
        {
          id: 2,
          src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/l5qpnfvu.iai.jpg",
          alt: "gelato",
        },
      ]}
    />
  );
};
