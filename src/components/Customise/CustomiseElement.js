//styles
import classes from './CustomiseElement.module.css';
//context
import { useContext } from 'react';
import { ColorThemeContext } from '../../App';
//icons
import basketDark from './icons/basketDark.png';
import basketLight from './icons/basketLight.png';

export const CustomiseElement = (props) => {
    const { colorTheme } = useContext(ColorThemeContext);

    return (
        <section className={colorTheme ? classes.sectionLight : classes.sectionDark}>
            <div className={colorTheme ? classes.valueLight : classes.valueDark}>
                {props.value}
            </div>
            <div className={classes.deleteDiv}>
                <button className={classes.button} onClick={props.onClick}>
                    <img 
                        className={classes.img}
                        src={colorTheme ? basketLight : basketDark}
                        alt='basket icon'
                    />
                </button>
            </div>
        </section>
    )
}