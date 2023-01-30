import classes from './LevelsPage.module.css';

import { LargeButton } from '../components/UI/LargeButton';

export const LevelsPage = () => {

    return(
        <section className={classes.section}>
            <div className={classes.elementsDiv}>
                <LargeButton value='Lowercased' to='/levels/lowercased'/>
                <LargeButton value='Uppercased' to='/levels/uppercased'/>
                <LargeButton value='With symbols' to='/levels/with-symbols'/>
            </div>
        </section>
    )
}