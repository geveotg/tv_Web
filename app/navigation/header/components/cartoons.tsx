import { FC } from "react";
import classes from "../style/cartoons.module.scss";
import Link from "next/link";

import { FaChevronRight, FaArrowDown } from "react-icons/fa";
import { useGetCategoriesQuery } from "@/app/redux/future/films/filmsApi";

interface Categories {
    category_id: string;
    category_name: string;
    parent_id: number;
}

const Cartoons: FC = (): JSX.Element => {
    const { data, isError, isLoading, isSuccess } = useGetCategoriesQuery({
        username: "TV-95266315",
        password: "524228170964",
    });

    const ProductList =
        data &&
        data?.map((el: Categories) => {
            return <li key={el.category_id}>{el.category_name}</li>;
        });
    return (
        <div className={classes["drop_menu"]}>
            Cartoons <FaChevronRight className={classes["icon"]} />
            {isError && <h1>Error</h1>}
            {isLoading && <h1>Loading</h1>}
            <div className={classes["drop_dwn"]} style={{ left: -279 }}>
                <h1>Cartoons</h1>
                <div className={classes["menu_inner_main"]}>
                    <ul className={classes["menu_inner"]}>{ProductList}</ul>
                    <div className={classes["menu_inner_right"]}>
                        <li>
                            <Link className={classes["menu_inner_right_links"]} href={""}>
                                All movies
                            </Link>
                        </li>
                        <li>
                            <Link className={classes["menu_inner_right_links"]} href={""}>
                                TOP movies
                            </Link>
                        </li>
                        <li>
                            <Link className={classes["menu_inner_right_links"]} href={""}>
                                Most viewed
                            </Link>
                        </li>
                        <li>
                            <Link className={classes["menu_inner_right_links"]} href={""}>
                                According to IMDb rating
                            </Link>
                        </li>
                        <li>
                            <Link className={classes["menu_inner_right_links"]} href={""}>
                                According to KP rating
                            </Link>
                        </li>

                        <li className={classes["menu_inner_right_years"]}>
                            <p>
                                By years
                                <FaArrowDown style={{ marginLeft: 5 }} />
                            </p>
                            <div style={{ marginTop: 10 }}>
                                <Link className={classes["menu_inner_right_links"]} href={""}>
                                    2024
                                </Link>
                                <Link className={classes["menu_inner_right_links"]} href={""}>
                                    2023
                                </Link>
                                <Link className={classes["menu_inner_right_links"]} href={""}>
                                    2022
                                </Link>
                                <Link className={classes["menu_inner_right_links"]} href={""}>
                                    2021
                                </Link>
                                <Link className={classes["menu_inner_right_links"]} href={""}>
                                    2020
                                </Link>
                                <Link className={classes["menu_inner_right_links"]} href={""}>
                                    2019
                                </Link>
                                <Link className={classes["menu_inner_right_links"]} href={""}>
                                    2018
                                </Link>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartoons;
