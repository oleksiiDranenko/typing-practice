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
            const element = {
                value: inputValue,
                id: customArray.length === 0 ? 0 : customArray[customArray.length - 1].id + 1
            }
            setCustomArray([...customArray, element]);
        }
        setInputValue('');
    }

    
    //when customArray is changing, renew the array in local storage
    useEffect(() => {
        localStorage.setItem('customArray', JSON.stringify(customArray));
    }, [customArray])

    const deleteElement = (deleteEl) => {
        setCustomArray(customArray.filter((element) => element.id !== deleteEl))
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
                    return <CustomiseElement 
                                value={element.value} 
                                key={key} 
                                onClick={() => deleteElement(element.id)}
                            />
                })}
            </div>

            <div className={classes.spaceDiv}></div>
        </section>
    )
}