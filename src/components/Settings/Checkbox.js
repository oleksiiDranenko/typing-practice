//styles
import classes from './Checkbox.module.css';
//context
import { useContext } from 'react';
import { ColorThemeContext } from '../../App';
import { SoundContext } from '../../App';
//icons
import checkLight from './icons/checkLight.png'
import checkDark from './icons/checkDark.png'

export const Checkbox = (props) => {
    const { colorTheme } = useContext(ColorThemeContext);
    const { soundOn } = useContext(SoundContext);

    return(
        <button
        onClick={props.onClick}
        className={colorTheme ? classes.checkboxLight : classes.checkboxDark}
        >
        {soundOn ? (
            <img 
                className={classes.img}
                src={colorTheme ? checkLight : checkDark}
            />
        ) : null}
    </button>
    )
}