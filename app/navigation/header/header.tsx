'use client'
import { FC,useState,useCallback } from "react";
import classes from './header.module.css'
import Link from "next/link";
import Films from "./components/films";

const Header:FC = ()=>{
    const [selectCategory, setselectCategory] = useState("Beef")

    const Select = useCallback((data: string) => {
        setselectCategory(data)
    }, []);

    // ALL: (HOST, query, callback, errorCallback) => {
    //     request(
    //         `${HOST}/player_api.php${requestQuery(
    //             query
    //         )}&action=get_series`,

    //         callback,
    //         errorCallback
    //     );
    // },
    // CATEGORIES: (HOST, query, callback, errorCallback) => {
    //     request(
    //         `${HOST}/player_api.php${requestQuery(
    //             query
    //         )}&action=get_series_categories`,

    //         callback,
    //         errorCallback
    //     );
    // },

    return (
        <div>
            <div>
                <Link href={'/'}>Home</Link>
                <Films />
            </div>
            <div></div>
        </div>
    )
}

export default Header;