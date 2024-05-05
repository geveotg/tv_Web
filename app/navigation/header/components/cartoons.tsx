import { FC } from "react";
import classes from '../style/cartoons.module.scss'
import Link from "next/link";

import { FaChevronRight,FaArrowDown } from "react-icons/fa";
import { useGetCategoriesQuery } from "@/app/redux/categorises/getcategories";

interface Categories {
    strCategory: string;
}

const Cartoons: FC = (): JSX.Element => {
    const { data, isError, isLoading, isSuccess, } = useGetCategoriesQuery('');

    const ProductList = data?.categories.map((el: Categories) => {
        return (
            <li>{el.strCategory}</li>
        )
    })
    return (
        <div className={classes['drop_menu']}>Cartoons <FaChevronRight className={classes['icon']} />
            {isError && <h1>Error</h1>}
            {isLoading && <h1>Loading</h1>}
            <div className={classes['drop_dwn']} style={{ left: -279 }}>
                <h1>Cartoons</h1>
                <div className={classes['menu_inner_main']}>
                    <ul className={classes['menu_inner']}>
                        {ProductList}
                    </ul>
                    <div className={classes['menu_inner_right']}>
                        <li><Link className={classes['menu_inner_right_links']} href={''}>All movies</Link></li>
                        <li><Link className={classes['menu_inner_right_links']} href={''}>TOP movies</Link></li>
                        <li><Link className={classes['menu_inner_right_links']} href={''}>Most viewed</Link></li>
                        <li><Link className={classes['menu_inner_right_links']} href={''}>According to IMDb rating</Link></li>
                        <li><Link className={classes['menu_inner_right_links']} href={''}>According to KP rating</Link></li>

                        <li className={classes['menu_inner_right_years']}>
                            <p>By years<FaArrowDown style={{ marginLeft: 5 }} /></p>
                            <div style={{ marginTop: 10 }}>
                                <Link className={classes['menu_inner_right_links']} href={''}>2024</Link>
                                <Link className={classes['menu_inner_right_links']} href={''}>2023</Link>
                                <Link className={classes['menu_inner_right_links']} href={''}>2022</Link>
                                <Link className={classes['menu_inner_right_links']} href={''}>2021</Link>
                                <Link className={classes['menu_inner_right_links']} href={''}>2020</Link>
                                <Link className={classes['menu_inner_right_links']} href={''}>2019</Link>
                                <Link className={classes['menu_inner_right_links']} href={''}>2018</Link>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartoons;