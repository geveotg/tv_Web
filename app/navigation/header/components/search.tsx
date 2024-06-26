'use client'
import { FC, useState } from "react";
import classes from '../style/search.module.scss'


import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";


const Search: FC = () => {
    const [search, setsearch] = useState(false)
    return (
        <div className={classes['search_main']}>
            <p className={`${classes['search_icon']} ${search ? classes['active'] : ''}`} onClick={() => {
                setsearch(!search)
            }}>
                <FaMagnifyingGlass className={classes['search_open_icon']}/>
                <LuSearchX className={classes['search_close_icon']}/>
            </p>
            {search && (
                <div className={classes['search_in_active']}>
                    <input type="text" placeholder="Search..." />
                </div>
            )}
        </div>
    )
}

export default Search;