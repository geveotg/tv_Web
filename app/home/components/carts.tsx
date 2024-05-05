"use client";

import { FC, useEffect, useState } from "react";
import { useGetFilmQuery } from "@/app/redux/future/films/filmsApi";
import classes from "../style/carts.module.scss";
import { dataFilms } from "@/app/datas/data";

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
    // const [state, setState] = useState()
    // const requestQuery = (object: Record<string, unknown>) => {
    //     let query = "";
    //     for (let key in object) {
    //         query += key + "=" + object[key] + "&";
    //     }

    //     if (!query) return query;

    //     return "?" + query.substring(0, query.length - 1);
    // };
    // function getData() {
    //     fetch(
    //         `http://vv.tvdev.club:8080/player_api.php${requestQuery({
    //             username: "TV-95266315",
    //             password: "524228170964",
    //         })}&action=get_vod_streams`
    //     )
    //         .then((data) => data.json())
    //         .then((data) => console.log(data));
    // }

    // function getCategories() {
    //     fetch(
    //         `http://vv.tvdev.club:8080/player_api.php${requestQuery({
    //             username: "TV-95266315",
    //             password: "524228170964",
    //         })}&action=get_vod_categories`
    //     )
    //         .then((data) => data.json())
    //         .then((data) => setState(data));
    // }
    // useEffect(() => {
    //     getData();
    //     getCategories();
    // }, []);

    console.log(dataFilms);

    const { data, isError, isLoading, isSuccess } = useGetFilmQuery({
        username: "TV-95266315",
        password: "524228170964",
    });

    useEffect(() => {
        let arr = [];
        if (data) {
            for (let i = 0; i < 20; i++) {
                arr.push(data[i]);
            }
            console.log(JSON.stringify(data));
        }
    }, [data]);

    const RenderFilm = () => {
        return data?.map(({ stream_id, stream_icon, name, stream_type }: Films, i: number) => {
            if (i < 20) {
                return (
                    <div className={classes["container-data"]} key={stream_id}>
                        <div className={classes["h2"]}>
                            <p>{name}</p>
                            <h2 style={{ fontSize: 9 }}>{stream_type}</h2>
                        </div>
                    </div>
                );
            }
        });
    };

    return <div className={classes["container"]}>{RenderFilm()}</div>;
};

export default Carts;
