"use client";

import { FC, useEffect, useState } from "react";
import { useGetFilmQuery } from "@/app/redux/future/films/filmsApi";
import classes from '../style/carts.module.scss'
import { dataFilms } from "@/app/datas/data";

interface Films {
    category_id: string;
    category_name: string; 
    parent_id: number;
}
interface Props {
    select: (data: string) => void
}

const Carts: FC<Props> = ({ select }): JSX.Element => {

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

    const { data, isError, isLoading, isSuccess } = useGetFilmQuery({})
    console.log(data, 'rtk query');
    const RenderFilm = () => {
        return data?.categories.map(({ category_id, category_name, parent_id }: Films) => {
            return (
                <div
                    className={classes['container-data']}
                    key={parent_id}
                // onClick={() => select(category_name)}
                >
                    <div className={classes['h2']}>
                        <p>{category_id}ved</p>
                        <h2>{category_name}dfv</h2>
                    </div>
                </div>
            )
        })
    }

    return (<div className={classes['container']}>
        {RenderFilm()}
    </div>);
};

export default Carts;
