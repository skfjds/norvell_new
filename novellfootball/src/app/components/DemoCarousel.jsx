import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const DemoCarousel = () => {
  const onChange = (index) => {
    console.log(`Carousel slide changed to index ${index}`);
  };

  const onClickItem = (index) => {
    console.log(`Clicked item at index ${index}`);
  };

  const onClickThumb = (index) => {
    console.log(`Clicked thumbnail at index ${index}`);
  };

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      
      <div>
        <img src="item.png" alt="Slide 1"  className="rounded-2xl"/>
      </div>

      <div>
        <img src="item3.png" alt="Slide 3" className="rounded-2xl" />
      </div>

      <div>
        <img src="item4.jpg" alt="Slide 4" className="rounded-2xl" />
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
