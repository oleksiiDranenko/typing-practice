import classes from './CustomiseInputForm.module.css';

import { useContext } from 'react';
import { ColorThemeContext } from '../../App';

export const CustomiseInputForm = (props) => {
    const { colorTheme } = useContext(ColorThemeContext);

    return (
        <form 
            className={classes.inputForm} 
            onSubmit={props.onSubmit}
        >
            <input 
                className={colorTheme ? classes.inputLight : classes.inputDark}
                placeholder={props.placeholder}
                value={props.inputValue}
                onChange={props.inputOnChange}
                ref={props.inputRef}
            />
            <button className={colorTheme ? classes.buttonLight : classes.buttonDark}>Add</button>
        </form>
    )
}