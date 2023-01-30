import classes from './LevelsPage.module.css';

import { LargeButton } from '../components/UI/LargeButton';

export const LevelsPage = () => {

    return(
        <section className={classes.section}>
            <div className={classes.elementsDiv}>
                <LargeButton value='Lowercased' to='/typing-practice/levels/lowercased'/>
                <LargeButton value='Uppercased' to='/typing-practice/levels/uppercased'/>
                <LargeButton value='With symbols' to='/typing-practice/levels/with-symbols'/>
            </div>
        </section>
    )
}