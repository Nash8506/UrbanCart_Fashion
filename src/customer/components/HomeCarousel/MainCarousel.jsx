import React from 'react'
import {mainCarouselData} from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {

    const items = mainCarouselData.map((item) => <img className="cursor-pointer -z-10"  role='presentation' src={item.imageSrc} alt="" />);


  return (
            <AliceCarousel
                infinite
                autoPlay
                autoPlayInterval={2000}
                animationDuration={1000}
                disableButtonsControls
                items={items}
            />
        );
}

export default MainCarousel
