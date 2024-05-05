"use client";
import { FC, useState, useCallback, useEffect } from "react";
import classes from "./header.module.scss";
import Link from "next/link";
import Films from "./components/films";
import Serials from "./components/serials";
import Cartoons from "./components/cartoons";
import Search from "./components/search";
import Login from "./components/login";
import { requestQuery } from "@/app/components/requestQuery";

import { GiHamburgerMenu } from "react-icons/gi";

const Header: FC = () => {
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
        getCategories();
    }, []);

    const [menu, setmenu] = useState(false);
    return (
        <div className={classes["main"]}>
            <div className={classes["nav"]}>
                <Link className={classes['home']} href={"/"}>
                    Home
                </Link>
                <div className={`${classes["menu_links"]} ${menu ? classes['active'] : ''}`}>
                    <Films />
                    <Serials />
                    <Cartoons />
                    <Link className={classes["links"]} href={"/collections"}>
                        Collections
                    </Link>
                    <Link className={classes["links"]} href={"/watching"}>
                        Are Watching
                    </Link>
                    <Link className={classes["links"]} href={"/novelties"}>
                        Novelties
                    </Link>
                </div>
            </div>
            <div className={classes["search_login_main"]}>
                <Search />
                <Login />
                <p
                    className={`${classes["Responsive_Menu"]} ${menu ? classes["active"] : ""}`}
                    onClick={() => {
                        setmenu(!menu);
                    }}>
                    <GiHamburgerMenu />
                </p>
            </div>
        </div>
    );
};

export default Header;
