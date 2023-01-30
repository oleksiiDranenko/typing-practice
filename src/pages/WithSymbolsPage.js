//styles
import classes from './Level.module.css';
//elements
import { WordsDisplay } from '../components/Level/WordsDisplay';
import { WordsInput } from '../components/Level/WordsInput';
//array and function
import {WithSymbolsArray, getIndex} from '../wordsArrays/WithSymbolsArray';
//hooks
import { useState, useContext } from 'react';
//context
import { SoundContext } from '../App';
//sound
import sound1 from '../sounds/sound1.mp3'

export const WithSymbolsPage = () => {
    const [arrayIndex, setArrayIndex] = useState(getIndex());
    const [inputValue, setInputValue] = useState('');

    const {soundOn} = useContext(SoundContext);

    const bubbleSound = new Audio(sound1);

    const charTyped = (e) => {
        //if the word typed right - generate new
        if(inputValue.trim() === WithSymbolsArray[arrayIndex]){
            setArrayIndex(getIndex());
            setInputValue('');
            e.target.value = '';
        } else{
            setInputValue(e.target.value);
            if(soundOn){
                bubbleSound.play();
            }
        }
    }

    return(
        <section className={classes.section}>
            <div className={classes.elementsDiv}>
                <WordsDisplay value={WithSymbolsArray[arrayIndex]}/>
                <WordsInput onChange={charTyped}/>
            </div>
        </section>
    )
}