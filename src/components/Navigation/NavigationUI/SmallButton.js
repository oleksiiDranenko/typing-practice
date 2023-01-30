import classes from './SmallButton.module.css';
import { useContext } from 'react';
import {ColorThemeContext} from '../../../App';
import { Link } from 'react-router-dom';

export const SmallButton = (props) => {
    const {colorTheme} = useContext(ColorThemeContext);
    
    return (
        <Link className={colorTheme ? classes.light : classes.dark} to={props.to}>
            {props.value}
        </Link>
    )
}