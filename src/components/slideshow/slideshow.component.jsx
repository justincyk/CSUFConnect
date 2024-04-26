import SlideshowItem from "../slideshow-item/slideshow-item.component";
import "react-slideshow-image/dist/styles.css";
import img1 from "../../assets/slideshow/CSUFslide1.jpeg";
import img2 from "../../assets/slideshow/CSUFslide2.jpeg";
import img3 from "../../assets/slideshow/CSUFslide3.jpeg";
import img4 from "../../assets/slideshow/CSUFslide4.jpeg";
import img5 from "../../assets/slideshow/CSUFslide5.jpeg";

import { Slide } from "react-slideshow-image";

const Slideshow = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <Slide>
      {images.map((item, index) => {
        return <SlideshowItem imageUrl={item} index={index} key={index} />;
      })}
    </Slide>
  );
};

export default Slideshow;
