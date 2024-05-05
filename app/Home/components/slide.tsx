import React from 'react';
import { Carousel } from 'antd';
import classes from '../style/slide.module.scss'
const Slide: React.FC = () => (
    <Carousel autoplay arrows infinite={false}>
      <div>
        <img className={classes['slide_images']} src="/images/carusel/1.jpg" alt="" />
      </div>
      <div>
        <img className={classes['slide_images']} src="/images/carusel/2.jpg" alt="" />
      </div>
      <div>
        <img className={classes['slide_images']} src="/images/carusel/3.jpg" alt="" />
      </div>
      <div>
        <img className={classes['slide_images']} src="/images/carusel/4.jpg" alt="" />
      </div>
      <div>
        <img className={classes['slide_images']} src="/images/carusel/5.jpg" alt="" />
      </div>
    </Carousel>
);

export default Slide;