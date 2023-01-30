import classes from './VersionHistory.module.css';
import { VersionElement } from '../components/Version/VersionElement';

export const VersionHistory = () => {

    return(
        <section className={classes.section}>
            <div className={classes.elementsDiv}>
                <VersionElement version='1.0' value='Dark theme and typing sounds'/>
            </div>
        </section>
    )
}