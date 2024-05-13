import { FC } from "react";
import classes from "../style/films.module.scss";
import Link from "next/link";
import Categories_Response from "./categories_response";

import { FaChevronRight, FaArrowDown } from "react-icons/fa";
import { useGetCategoriesQuery } from "@/app/redux/future/films/filmsApi";
import { getCategories } from "@/app/datas/navdata";
import { menu_inner_right_films, menu_inner_right_years_films } from "@/app/datas/navdata";

const Films: FC = (): JSX.Element => {
    const ProductList = getCategories.map((el) => {
        return <li key={el.category_id}>{el.category_name}</li>;
    });

    const getRightMenu = menu_inner_right_films.map((el) => {
        return (
            <li key={el.id}>
                <Link className={classes["menu_inner_right_links"]} href={el.href}>
                    {el.title}
                </Link>
            </li>
        );
    });
    const getRightMenuYears = menu_inner_right_years_films.map((el) => {
        return (
            <Link key={el.id} className={classes["menu_inner_right_links"]} href={el.href}>
                {el.title}
            </Link>
        );
    });
    return (
        <div className={classes["drop_menu"]}>
            Films <FaChevronRight className={classes["icon"]} />
            <div className={classes["drop_dwn"]} style={{ left: -67 }}>
                <h1>Films</h1>
                <div className={classes["menu_inner_main"]}>
                    <ul className={classes["menu_inner"]}>{ProductList}</ul>
                    <div className={classes["menu_inner_right"]}>
                        {getRightMenu}
                        <li className={classes["menu_inner_right_years"]}>
                            <p>
                                By years
                                <FaArrowDown style={{ marginLeft: 5 }} />
                            </p>
                            <div style={{ marginTop: 10 }}>{getRightMenuYears}</div>
                        </li>
                    </div>
                </div>
            </div>
            <div className={classes["Categories_Response"]}>
                <Categories_Response />
            </div>
        </div>
    );
};

export default Films;
