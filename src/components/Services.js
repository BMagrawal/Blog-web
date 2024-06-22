import React from 'react'
import { Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../images/2.webp";
import img2 from "../images/3.jpg";
const Services = () => {
  return (
    <div>
      
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false} showIndicators={false}>
        <div>
            <img src={img1} alt="images" />
            <p className='legend'>Full Stack</p>
        </div>

        <div>
            <img src={img2} alt="images" />
            <p className='legend'>peer-to-peer support</p>
        </div>
    </Carousel>

    </div>
  )
}

export default Services
