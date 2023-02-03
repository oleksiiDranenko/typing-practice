import classes from './VersionHistory.module.css';
import { VersionElement } from '../components/Version/VersionElement';

export const VersionHistory = () => {

    return(
        <section className={classes.section}>
            <div className={classes.elementsDiv}>
                <VersionElement version='0.2.0' value='Custom level and optimisation'/>
                <VersionElement version='0.1.0' value='Dark theme and typing sounds'/>
            </div>
            <div className={classes.downDiv}></div>
        </section>
    )
}