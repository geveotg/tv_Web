import { FC } from "react";
import classes from '../style/films.module.css'

import { FaChevronRight, FaGoogle, FaYandex, FaFacebookF, FaEdge, FaUserAlt, FaArrowDown, FaPlay } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { TiAdjustBrightness } from "react-icons/ti";
import { useGetCategoriesQuery } from "@/app/redux/categorises/getcategories";

interface Categories {
    idCategory: string;
    strCategory: string;
}

const Films: FC = ():JSX.Element => {
    const { data, isError, isLoading, isSuccess, } = useGetCategoriesQuery('');

    const ProductList = data?.categories.map((el: Categories) => {
        return (
            <li>{el.strCategory}</li>
        )
    })
    return (
        <div>Films <FaChevronRight className={classes['icon']} />
        {isError && <h1>Error</h1>}
            <div className={classes['drop_dawn']}>
                <h1>Films</h1>
                <div className={classes['menu_inner_main']}>
                    <ul className={classes['menu_inner']}>
                        {ProductList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Films