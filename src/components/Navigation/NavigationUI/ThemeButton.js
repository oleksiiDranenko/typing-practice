//styles
import classes from './ThemeButton.module.css';
//hooks
import { useContext, useEffect } from 'react';
//context
import {ColorThemeContext} from '../../../App';
//icons
import sunIcon from '../icons/sun.png';
import moonIcon from '../icons/moon.png';

export const ThemeButton = () => {
    const {colorTheme, setColorTheme} = useContext(ColorThemeContext);

    //changing the value of colorTheme
    const changeTheme = () => {
        setColorTheme(colorTheme ? false : true);
    }

    //changing the value of colorTheme in local storage
    useEffect(() => {
		localStorage.setItem('colorTheme', JSON.stringify(colorTheme));
	}, [colorTheme])

    // set the theme to <body>
    useEffect(() => {
		document.body.className = colorTheme ? 'light-bg' : 'dark-bg'
	},[colorTheme])
   
    return(
        <button 
            className={colorTheme ? classes.light : classes.dark}
            onClick={changeTheme}
        >
            <img
                className={classes.img} 
                src={colorTheme ? sunIcon : moonIcon} 
                alt='sun/moon icon, representing the theme' 
            />
        </button>
    )
}