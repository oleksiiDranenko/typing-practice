//styles
import classes from './DeleteAll.module.css'
//context
import { useContext } from 'react'
import { ColorThemeContext } from '../../App'

export const DeleteAll = (props) => {
    const { colorTheme } = useContext(ColorThemeContext);

    return (
        <section className={classes.section}>
            <button 
                className={colorTheme ? classes.light : classes.dark}
                onClick={props.buttonOnClick}
            >
                Delete all
            </button>
        </section>
    )
}