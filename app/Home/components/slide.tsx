import React from "react";
import { Carousel } from "antd";
import classes from "../style/slide.module.scss";
import { dataSlide } from "@/app/datas/dataSlide";
const Slide: React.FC = () => {
    const getIcons = dataSlide.map((e) => {
        return (
            <div key={e.id}>
                <img className={classes["slide_images"]} src={e.image} alt="" />
            </div>
        );
    });

    return (
        <div className={classes["silide_container"]}>
            <Carousel autoplay arrows infinite={false}>
                {getIcons}
            </Carousel>
        </div>
    );
};
export default Slide;
