//styles
import classes from './Level.module.css'
//elements
import { WordsDisplay } from '../components/Level/WordsDisplay';
import { WordsInput } from '../components/Level/WordsInput';
//hooks
import { useState, useContext } from 'react';
//context
import { SoundContext, CustomArrayContext } from '../App';
//sound
import sound1 from '../sounds/sound1.mp3'
import { AlertNoElements } from '../components/Customise/AlertNoElements';

export const CustomLevelPage = () => {
    const { customArray } = useContext(CustomArrayContext)
    const {soundOn} = useContext(SoundContext);

    const getIndex = () => {
        return Math.floor(Math.random() * customArray.length)
    }

    const [arrayIndex, setArrayIndex] = useState(getIndex());
    const [inputValue, setInputValue] = useState('');

    const bubbleSound = new Audio(sound1);

    const charTyped = (e) => {
        setInputValue(e.target.value);
        if(soundOn){
            bubbleSound.play();
        }
    }

    if(customArray.length !== 0){
        if(inputValue.trim() === customArray[arrayIndex].value){
            setArrayIndex(getIndex());
            setInputValue('');
        } 
    }

    return (
        <section className={classes.section}>
            {customArray.length === 0 ?
             <AlertNoElements value={'There are no custom elements yet. Go to "Customise"'}/>
            :  <div className={classes.elementsDiv}>
                <WordsDisplay value={customArray[arrayIndex].value}/>
                <WordsInput value={inputValue} onChange={charTyped}/>
            </div>
            }
        </section>
    )
}