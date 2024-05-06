"use client";
import { FC, useState, useCallback, useEffect } from "react";
import classes from "./header.module.scss";
import Link from "next/link";
import Films from "./components/films";
import Serials from "./components/serials";
import Cartoons from "./components/cartoons";
import Search from "./components/search";
import Login from "./components/login";

import { GiHamburgerMenu } from "react-icons/gi";

const Header: FC = () => {
    const [menu, setmenu] = useState(false);
    return (
        <div className={classes["main"]}>
            <div className={classes["nav"]}>
                <Link className={classes["home"]} href={"/"}>
                    Home
                </Link>
                <div className={`${classes["menu_links"]} ${menu ? classes["active"] : ""}`}>
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
                    }}
                >
                    <GiHamburgerMenu />
                </p>
            </div>
        </div>
    );
};

export default Header;
