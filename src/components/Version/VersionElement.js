//styles
import classes from './VersionElement.module.css';
//theme context
import { useContext } from 'react';
import { ColorThemeContext } from '../../App';

export const VersionElement = (props) => {
    const { colorTheme } = useContext(ColorThemeContext)

    return(
        <section className={colorTheme ? classes.sectionLight : classes.sectionDark}>
            <div className={colorTheme ? classes.versionDivLight : classes.versionDivDark}>
                {props.version}
            </div>
            <div className={colorTheme ? classes.valueDivLight : classes.valueDivDark}>
                {props.value}
            </div>
        </section>
    )
}