import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper } from "@mui/material";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <Paper>
        <img src="/image1.jpg" alt="Image 1" width={50} height={30} />
      </Paper>
      <Paper>
        <img src="/image2.jpg" alt="Image 2" />
      </Paper>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
