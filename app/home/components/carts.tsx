"use client";

import { FC, useEffect, useState } from "react";
import { useGetFilmQuery } from "@/app/redux/future/films/filmsApi";
import classes from '../style/carts.module.scss'
import { dataFilms } from "@/app/datas/data";

interface Films {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
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

    const { data, isError, isLoading, isSuccess } = useGetFilmQuery({})
    console.log(data, 'rtk query');
    const RenderFilm = () => {
        return data?.categories.map(({ idCategory, strCategory, strCategoryThumb, strCategoryDescription, }: Films) => {
            return (
                <div
                    className={classes['container-data']}
                    key={idCategory}
                >
                    <div className={classes['h2']}>
                        <p>{strCategory}</p>
                        <h2 style={{fontSize:9}}>{strCategoryDescription}</h2>
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
