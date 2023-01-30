//styles
import classes from './GoBackButton.module.css';
//hooks and conmonents
import { useContext} from "react";
import { Link, useNavigate } from 'react-router-dom';
//context
import {ColorThemeContext} from '../../../App';
//icons
import arrowIconBlack from '../icons/arrow-black.png';
import arrowIconWhite from '../icons/arrow-white.png';

export const GoBackButton = () => {
    const {colorTheme} = useContext(ColorThemeContext);

    const navigate = useNavigate();

     //navigate to the previous page
	const goBack = () => {
		navigate(-1);
	}

    return(
        <Link 
            onClick={goBack} 
            className={colorTheme ? classes.light : classes.dark}
        >
            <img
                className={classes.img} 
                src={colorTheme ? arrowIconBlack : arrowIconWhite} 
                alt='arrow back' 
            />
        </Link>
    )
}