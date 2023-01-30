//styles
import classes from './HomePage.module.css';
//elements
import { LargeButton } from '../components/UI/LargeButton';
import { MediumButton } from '../components/UI/MediumButton';
//context
import { useContext } from 'react';
import { ColorThemeContext } from '../App';

export const HomePage = () => {
    const {colorTheme} = useContext(ColorThemeContext)

    return(
        <section className={classes.section}>
            <div className={classes.elementsDiv}>

                <h1 className={colorTheme ? classes.headerLight : classes.headerDark}>
                    Typing Practice
                </h1>

                <LargeButton value='Go To Levels' to={'/levels'}/>
                
                <div className={classes.buttonsDiv}>
                    <MediumButton value='Version History' to='/version-history'/>
                    <MediumButton value='To Employer' to='/to-employer'/>
                </div>
            </div>
        </section>
    )
}