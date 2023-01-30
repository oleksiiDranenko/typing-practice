//styles
import classes from './Navbar.module.css'; 

//elements
import { GoBackButton } from './NavigationUI/GoBackButton';
import { ThemeButton } from './NavigationUI/ThemeButton';
import { NavHeader } from './NavigationUI/NavHeader';

//hook
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation();

    return (
        <section className={classes.section}>
            
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