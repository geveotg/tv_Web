"use client";

import { FC, useEffect, useState } from "react";
import { useGetFilmQuery } from "@/app/redux/future/films/filmsApi";
import classes from "../style/carts.module.scss";
import { dataFilms } from "@/app/datas/data";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoMdStar } from "react-icons/io";

interface Films {
    added: string;
    category_id: string;
    category_ids: number[];
    container_extension: string;
    custom_sid: null;
    direct_source: string;
    is_adult: number;
    name: string;
    num: number;
    rating: string;
    stream_icon: string;
    stream_id: number;
    stream_type: string;
    rating_5based: number;
    trailer: string;
}

const Carts: FC = (): JSX.Element => {
    const { data, isError, isLoading, isSuccess } = useGetFilmQuery({
        username: "TV-95266315",
        password: "524228170964",
    });
    //
    const RenderFilm = () => {
        return dataFilms?.map(
            ({ stream_id, stream_icon, name, stream_type, rating_5based }: Films, i: number) => {
                let arr = [];
                for (let i = 0; i < 5; i++) {
                    if (i <= rating_5based) {
                        arr.push(<IoMdStar className={classes["green_star"]} />);
                    } else {
                        arr.push(<IoMdStar className={classes["simple_star"]} />);
                    }
                }

                return (
                    <div className={classes["container-data"]} key={stream_id}>
                        <div className={classes["container-router"]}>
                            <div className={classes["container-router-fix"]}>
                                <div className={classes["image-div"]}>
                                    <img className={classes["imag"]} src={stream_icon} alt="img" />
                                    <p className={classes["icone"]}>
                                        <MdOutlineSlowMotionVideo />
                                    </p>
                                    <div className={classes["stars_container"]}>{arr}</div>
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
    };

    return (
        <div className={classes["container"]}>
            <div className={classes["render-container"]}>{RenderFilm()}</div>
        </div>
    );
};

export default Carts;
