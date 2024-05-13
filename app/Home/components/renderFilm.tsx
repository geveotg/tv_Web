"use client";
import { FC } from "react";
import classes from "../style/films.module.scss";
import { dataFilms, FilmsInt } from "@/app/datas/data";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { GoChevronRight } from "react-icons/go";

const RenderFilm: FC = (): JSX.Element => {
    const render = dataFilms?.map(
        ({ stream_id, stream_icon, name, stream_type, rating_5based }: FilmsInt, i: number) => {
            let stars = [];
            for (let i = 0; i < 5; i++) {
                if (i <= rating_5based) {
                    stars.push(<IoMdStar className={classes["green_star"]} />);
                } else {
                    stars.push(<IoMdStar className={classes["simple_star"]} />);
                }
            }
            return (
                <div className={classes["container-data"]} key={stream_id}>
                    <div className={classes["container-router"]}>
                        <div className={classes["container-router-fix"]}>
                            <div className={classes["image-div"]}>
                                <img className={classes["imag"]} src={stream_icon} alt="img" />
                                <div className={classes["container-icon"]}>
                                    <p className={classes["icone"]}>
                                        <MdOutlineSlowMotionVideo />
                                    </p>
                                </div>
                                <div className={classes["stars_container"]}>{stars}</div>
                            </div>
                            <div className={classes["container-text"]}>
                                <p className={classes["p"]}>{name}</p>
                                <h2 style={{ fontSize: 10 }}> type: {stream_type}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    );

    return (
        <div className={classes["container"]}>
            <div className={classes["containerText"]}>
                <h1 className={classes["iconH1"]}>
                    Serialner
                    <GoChevronRight />{" "}
                </h1>
            </div>
            <div className={classes["renderContainers"]}>{render}</div>
        </div>
    );
};
export default RenderFilm;
