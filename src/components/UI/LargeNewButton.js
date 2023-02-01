import classes from './LargeNewButton.module.css';
import { useContext } from "react";
import {ColorThemeContext} from '../../App';
import { Link } from 'react-router-dom';

export const LargeNewButton = (props) => {
    const {colorTheme} = useContext(ColorThemeContext);
    return (
        <Link className={colorTheme ? classes.light : classes.dark} to={props.to}>
            {props.value}
            <span className={colorTheme ? classes.spanLight : classes.spanDark}>
                {props.span}
            </span>
        </Link>
    )
}