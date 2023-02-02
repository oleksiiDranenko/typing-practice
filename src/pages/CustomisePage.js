//classes
import classes from './CustomisePage.module.css';
//custom elements
import { CustomiseElement } from '../components/Customise/CustomiseElement';
import { CustomiseInputForm } from '../components/Customise/CustomiseInputForm';
//context
import { useContext, useState } from 'react';
import { CustomArrayContext } from '../App';

export const CustomisePage = () => {
    const { customArray, setCustomArray } = useContext(CustomArrayContext);
    const [inputValue, setInputValue] = useState('');

    const inputValueChange = (e) => {
        setInputValue(e.target.value);
    }

    const newElementAdd = (e) => {
        e.preventDefault();
        if(inputValue.trim() !== ''){
            setCustomArray([...customArray, inputValue]);
        }
        setInputValue('');
    }

    return(
        <section className={classes.section}>
            <div className={classes.inputDiv}>
                <CustomiseInputForm
                    inputValue={inputValue}
                    inputOnChange={inputValueChange}
                    onSubmit={newElementAdd}
                />
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