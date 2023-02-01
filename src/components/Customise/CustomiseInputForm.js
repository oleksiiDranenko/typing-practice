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
                placeholder='Enter new element...'
                value={props.inputValue}
                onChange={props.inputOnChange}
            />
            <button className={colorTheme ? classes.buttonLight : classes.buttonDark}>Add</button>
        </form>
    )
}