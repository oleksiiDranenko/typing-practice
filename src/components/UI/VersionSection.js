import classes from './VersionSection.module.css';
import { useContext } from "react";
import {ColorThemeContext} from '../../App';

export const VersionSection = () => {
    const {colorTheme} = useContext(ColorThemeContext);

    return (
        <section className={colorTheme ? classes.light : classes.dark}>
            This app is on version 0.2.0
        </section>
    )
}