import classes from './LevelsPage.module.css';

import { LargeButton } from '../components/UI/LargeButton';
import { LargeNewButton } from '../components/UI/LargeNewButton';

export const LevelsPage = () => {

    return(
        <section className={classes.section}>
            <div className={classes.elementsDiv}>
                <LargeButton value='Lowercased' to='/typing-practice/levels/lowercased'/>
                <LargeButton value='Uppercased' to='/typing-practice/levels/uppercased'/>
                <LargeNewButton value='Custom level' to='/typing-practice/levels/custom' span='New'/>
            </div>
        </section>
    )
}