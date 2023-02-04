//classes
import classes from './CustomisePage.module.css';
//custom elements
import { CustomiseElement } from '../components/Customise/CustomiseElement';
import { CustomiseInputForm } from '../components/Customise/CustomiseInputForm';
//hooks
import { useContext, useEffect, useState, useRef } from 'react';
//context
import { CustomArrayContext } from '../App';
import { AlertNoElements } from '../components/Customise/AlertNoElements';
import { DeleteAll } from '../components/Customise/DeleteAll.js';

export const CustomisePage = () => {
    const { customArray, setCustomArray } = useContext(CustomArrayContext);
    const [inputValue, setInputValue] = useState('');
    const [inputPlaceholder, setInputPlaceholder] = useState('Enter new element...');
    const inputRef = useRef(null);

    const inputValueChange = (e) => {
        setInputValue(e.target.value);
    }

    const newElementAdd = (e) => {
        e.preventDefault();
        
        if(inputValue.trim() === ''){
            setInputPlaceholder('No value entered...');
            inputRef.current.blur();
        }
        
        else if(inputValue.trim() !== '' && inputValue.length <= 20){
            const element = {
                value: inputValue,
                id: customArray.length === 0 ? 0 : customArray[customArray.length - 1].id + 1
            }
            setCustomArray([...customArray, element]);
            setInputPlaceholder('Enter new element...');
        } 
        
        else if(inputValue.length > 20){
            setInputPlaceholder('Max length is 20 characters...');
            inputRef.current.blur();
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
    const deleteAll = () => {
        setCustomArray([])
    }

    return(
        <section className={classes.section}>
            <div className={classes.inputDiv}>
                <CustomiseInputForm
                    inputValue={inputValue}
                    inputOnChange={inputValueChange}
                    onSubmit={newElementAdd}
                    placeholder={inputPlaceholder}
                    inputRef={inputRef}
                />
            </div>

            <div className={classes.elementsDiv}>
                {customArray.length === 0 ? <AlertNoElements value='There are no elements yet...'/> : null}
                {customArray.length !== 0 ? <DeleteAll buttonOnClick={deleteAll}/> : null}
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