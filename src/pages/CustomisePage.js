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
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
                <CustomiseElement value='test element'/>
            </div>

            <div className={classes.spaceDiv}></div>
        </section>
    )
}