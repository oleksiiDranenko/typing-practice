import classes from './AlertNoElements.module.css'

import { useContext } from 'react'
import { ColorThemeContext } from '../../App'

export const AlertNoElements = (props) => {
    const { colorTheme } = useContext(ColorThemeContext);

    return (
        <div className={classes.div}>
            <p className={colorTheme ? classes.light : classes.dark}>
                {props.value}
            </p>
        </div>
    )
}