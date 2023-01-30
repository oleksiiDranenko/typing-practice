import classes from './WordsDisplay.module.css';

import { useContext } from 'react';
import { ColorThemeContext } from '../../App';

export const WordsDisplay = (props) => {
    const {colorTheme} = useContext(ColorThemeContext);
    
    return(
        <div className={colorTheme ? classes.light : classes.dark}>
            {props.value}
        </div>
    )
}