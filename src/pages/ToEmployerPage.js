//styles
import classes from './ToEmployerPage.module.css';
//theme cotext
import { ColorThemeContext } from '../App';
import { useContext } from 'react';

export const ToEmployerPage = () => {
    const { colorTheme } = useContext(ColorThemeContext)

    return (
        <section className={classes.section}>
            <div className={colorTheme ? classes.divLight : classes.divDark}>
                My name is Oleksii and this is my first React.js project. 
                It is made without using Typescript and Redux. 
                It uses local storage to store the states. 
                Here you can practise in speed typing with two default levels.
                For default levels app uses prewritten JavaScript arrays instead of API.
                But you can also make your own custom level by adding new elements to your custom array.
                Additionally, you can enable sounds when typing in the level settings
            </div>
        </section>
    )
}