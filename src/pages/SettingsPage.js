import { SettingsElement } from '../components/Settings/SettingsElement';
import classes from './SettingsPage.module.css';

export const SettingsPage = () => {

    return(
        <section className={classes.section}>
            <div className={classes.elementsDiv}>
               <SettingsElement value='Enable sounds'/>
            </div>
        </section>
    )
}