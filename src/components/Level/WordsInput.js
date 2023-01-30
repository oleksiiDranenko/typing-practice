//styles
import classes from './WordsInput.module.css';
//context
import { useContext } from 'react';
import { ColorThemeContext } from '../../App';

export const WordsInput = (props) => {
    const {colorTheme} = useContext(ColorThemeContext);

    return (
        <input 
            className={colorTheme ? classes.light : classes.dark}
            onChange={props.onChange}
            value={props.value}
            spellCheck={false}
        />
    )
}