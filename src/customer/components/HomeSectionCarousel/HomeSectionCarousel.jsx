import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 3.5 },
  };
  const items = [1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1].map((item) => (
    <HomeSectionCard />
  ));
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative px-5">
        <AliceCarousel
          infinite
          animationDuration={1000}
          disableButtonsControls
          items={items}
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;