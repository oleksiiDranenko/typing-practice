//styles
import classes from './Navbar.module.css'; 

//elements
import { GoBackButton } from './NavigationUI/GoBackButton';
import { ThemeButton } from './NavigationUI/ThemeButton';
import { NavHeader } from './NavigationUI/NavHeader';

//hook
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ColorThemeContext } from '../../App';

export const Navbar = () => {
    const location = useLocation();
    const {colorTheme} = useContext(ColorThemeContext);

    return (
        <section className={colorTheme ? classes.sectionLight : classes.sectionDark}>
            
            <div className={classes.leftDiv}>
                {location.pathname !== '/typing-practice' &&  
                location.pathname !== '/typing-practice/'  ? <GoBackButton/> : null}
            </div>

            <NavHeader/>

            <div className={classes.rightDiv}>
                <ThemeButton/>
            </div>
        </section>
    )
}