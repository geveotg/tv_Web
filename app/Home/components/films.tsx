"use client";

import { FC } from "react";
import { useGetFilmQuery } from "@/app/redux/future/films/filmsApi";
import classes from "../style/carts.module.scss";
import RenderFilm from "./renderFilm";
import RenderSerials from "./renderSerials";

const Films: FC = (): JSX.Element => {
    // const { data, isError, isLoading, isSuccess } = useGetFilmQuery({
    //     username: "TV-95266315",
    //     password: "524228170964",
    // });

    return (
        <div className={classes["container"]}>
            <div className={classes["render-container"]}>
                <RenderFilm />
                <RenderSerials />
            </div>
        </div>
    );
};

export default Films;
