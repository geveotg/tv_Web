"use client";

import { FC, useEffect } from "react";

const Carts: FC = (): JSX.Element => {
    const requestQuery = (object: Record<string, unknown>) => {
        let query = "";
        for (let key in object) {
            query += key + "=" + object[key] + "&";
        }

        if (!query) return query;

        return "?" + query.substring(0, query.length - 1);
    };
    function getData() {
        fetch(
            `http://vv.tvdev.club:8080/player_api.php${requestQuery({
                username: "TV-95266315",
                password: "524228170964",
            })}&action=get_vod_streams`
        )
            .then((data) => data.json())
            .then((data) => console.log(data));
    }

    function getCategories() {
        fetch(
            `http://vv.tvdev.club:8080/player_api.php${requestQuery({
                username: "TV-95266315",
                password: "524228170964",
            })}&action=get_vod_categories`
        )
            .then((data) => data.json())
            .then((data) => console.log(data));
    }

    useEffect(() => {
        getData();
        getCategories();
    }, []);

    return <div></div>;
};

export default Carts;
