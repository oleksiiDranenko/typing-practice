//classes
import classes from './CustomisePage.module.css';
//custom elements
import { CustomiseElement } from '../components/Customise/CustomiseElement';
import { CustomiseInputForm } from '../components/Customise/CustomiseInputForm';
//hooks
import { useContext, useEffect, useState } from 'react';
//context
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

    //when customArray is changing, renew the array in local storage
    useEffect(() => {
        localStorage.setItem('customArray', JSON.stringify(customArray));
    }, [customArray])

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