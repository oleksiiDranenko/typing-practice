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
            case '/levels': 
                return 'Awailable levels'
            case '/levels/lowercased':
                return <>
                    <SmallButton value='Levels' to='/levels'/>
                    <SmallButton value='Settings' to='/settings'/>
                </>
            case '/levels/uppercased':
                return <>
                    <SmallButton value='Levels' to='/levels'/>
                    <SmallButton value='Settings' to='/settings'/>
                </>
            case '/levels/with-symbols':
                return <>
                    <SmallButton value='Levels' to='/levels'/>
                    <SmallButton value='Settings' to='/settings'/>
                </>
            case '/settings':
                return 'Settings'
            case '/version-history':
                return 'Version history'
            case '/to-employer':
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