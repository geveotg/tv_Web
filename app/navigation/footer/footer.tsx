import { FC } from "react";
import classes from './footer.module.scss'

const Footer: FC = (): JSX.Element => {
    return (
        <div className={classes['container']}>
            <div className={classes['container-help']}>
                <div className={classes['container-about']}>
                    <p>
                        մենք լավագույնն ենք HD որակով ֆիլմերի և սերիալների աշխարհում:
                        Գովազդների բովանդակության համար կայքը պատասխանատվություն չի կրում:
                    </p>
                </div>
                <div className={classes['container-name']}>
                    <p>
                        Films.bz
                        support@films.bz
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer