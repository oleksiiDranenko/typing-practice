//styles
import classes from './NavHeader.module.css';

//element
import { SmallButton } from './SmallButton';

//context
import {ColorThemeContext} from '../../../App';

//hooks
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

export const NavHeader = () => {
    const {colorTheme} = useContext(ColorThemeContext);

    const location = useLocation();

    //adding different headers depending on the location
    const locationStatement = () => {
        switch(location.pathname){
            case '/typing-practice/levels': 
                return 'Awailable levels'
            case '/typing-practice/levels/lowercased':
                return <>
                    <SmallButton value='Levels' to='/typing-practice/levels'/>
                    <SmallButton value='Settings' to='/typing-practice/settings'/>
                </>
            case '/levels/uppercased':
                return <>
                    <SmallButton value='Levels' to='/typing-practice/levels'/>
                    <SmallButton value='Settings' to='/typing-practice/settings'/>
                </>
            case '/levels/with-symbols':
                return <>
                    <SmallButton value='Levels' to='/typing-practice/levels'/>
                    <SmallButton value='Settings' to='/typing-practice/settings'/>
                </>
            case '/settings':
                return 'Settings'
            case '/typing-practice/version-history':
                return 'Version history'
            case '/typing-practice/to-employer':
                return 'To employer'
            default:
                return null
        }
    }

    return (
        <section className={classes.section}>
            <div className={colorTheme ? classes.light : classes.dark}>
                {locationStatement()}
            </div>
        </section>
    )
}