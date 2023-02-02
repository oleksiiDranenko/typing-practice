//classes
import classes from './CustomisePage.module.css';
//custom elements
import { CustomiseElement } from '../components/Customise/CustomiseElement';
import { CustomiseInputForm } from '../components/Customise/CustomiseInputForm';
//context
import { useContext } from 'react';
import { CustomArrayContext } from '../App';

export const CustomisePage = () => {
    const { customArray } = useContext(CustomArrayContext);

    return(
        <section className={classes.section}>
            <div className={classes.inputDiv}>
                <CustomiseInputForm/>
            </div>

            <div className={classes.elementsDiv}>
                {customArray.map((element, key) => {
                    return <CustomiseElement value={element} key={key}/>
                })}
            </div>

            <div className={classes.spaceDiv}></div>
        </section>
    )
}