import { FC } from "react";
import classes from './footer.module.scss'

const Footer: FC = (): JSX.Element => {
    return (
        <div className={classes['footer']}>

            <div className={classes['container']} >
                <div className={classes['footer-column']} >
                    <h2>About Us</h2>
                    <p>Add a brief description of your website here.</p>
                </div>
                <div className={classes['footer-column']} >
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Films</a></li>
                        <li><a href="#">TV Shows</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className={classes['footer-column']} >
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Email: example@example.com</li>
                        <li>Phone: +1234567890</li>
                        <li>Address: 123 Street, City, Country</li>
                    </ul>
                </div>
            </div>
            <div className={classes['footer-bottom']} >
                &copy; 2024 Films Website | Designed by Your Name
            </div>

        </div>
    )
}

export default Footer