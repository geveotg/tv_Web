'use client'
import { FC, useState } from "react";
import classes from '../style/login.module.scss'

import {FaGoogle, FaYandex, FaFacebookF, FaEdge, FaUserAlt} from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { FaUserTimes } from "react-icons/fa";

const Login:FC = ()=>{
    const [login,setlogin] = useState(false)
    return (
        <div className={classes['login_main']}>
            <p className={`${classes['login_icon']} ${login ? classes['active'] : ''}`} onClick={() => {
                        setlogin(!login)
                    }}>
                <FaUserAlt className={classes['login_open_icon']}/>
                <FaUserTimes className={classes['login_close_icon']}/>
                </p>
                    {login && (
                        <form className={classes['login_in_active']}>
                            <h1 title="login">Login</h1>
                            <input type="email" placeholder="E-Mail" />
                            <input type="password" placeholder="Pasword" />
                            <div className={classes['remember_log-btn']}>
                                <div>
                                    <label className={classes['login_remember']}>
                                        <input type="checkbox" />
                                        <span>remember me</span>
                                        <a style={{ position: 'absolute' }} href="">forgot password?</a>
                                    </label>
                                </div>
                                <button>Login<IoLogIn /></button>
                            </div>
                            <div className={classes['log_social']}>
                                <h3>Login via social network</h3>
                                <div className={classes['log_social_icons']}>
                                    <p className={classes['social_icon']}><FaGoogle /></p>
                                    <p className={classes['social_icon']}><FaYandex /></p>
                                    <p className={classes['social_icon']}><FaEdge /></p>
                                    <p className={classes['social_icon']}><FaFacebookF /></p>
                                </div>
                            </div>
                            <p className={classes['singup']}>are you still with us?<a href=""> sign up</a></p>
                        </form>
                    )}
        </div>
    )
}

export default Login;