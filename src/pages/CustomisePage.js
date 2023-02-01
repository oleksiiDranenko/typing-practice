import { CustomiseElement } from '../components/Customise/CustomiseElement';
import { CustomiseInputForm } from '../components/Customise/CustomiseInputForm';
import classes from './CustomisePage.module.css';

export const CustomisePage = () => {

    return(
        <section className={classes.section}>
            <div className={classes.inputDiv}>
                <CustomiseInputForm/>
            </div>

            <div className={classes.elementsDiv}>
                <CustomiseElement value='element1'/>
                <CustomiseElement value='element2'/>
                <CustomiseElement value='element2'/>
                <CustomiseElement value='element2'/>
                <CustomiseElement value='element2'/>
                <CustomiseElement value='element2'/>
                <CustomiseElement value='element2'/>
                <CustomiseElement value='element2'/>
                <CustomiseElement value='element2'/>
                <CustomiseElement value='element2'/>
                <CustomiseElement value='element2'/>
                <CustomiseElement value='element2'/>
            </div>

            <div className={classes.spaceDiv}></div>
        </section>
    )
}