//styles
import classes from './SettingsElement.module.css';
//hooks
import { useContext, useEffect } from 'react';
//context
import { ColorThemeContext } from '../../App';
import { SoundContext } from '../../App';
//element
import { Checkbox } from './Checkbox';

export const SettingsElement = (props) => {
    const { colorTheme } = useContext(ColorThemeContext);
    const { soundOn, setSoundOn } = useContext(SoundContext);

    const turnSound = () => {
        setSoundOn(soundOn ? false : true)
    }

    useEffect(() => {
		localStorage.setItem('soundOn', JSON.stringify(soundOn));
	}, [soundOn])

    return (
        <div className={colorTheme ? classes.elementLight : classes.elementDark}>
                <div className={classes.nameDiv}>
                    {props.value}
                </div>
                <div className={classes.checkDiv}>
                   <Checkbox onClick={turnSound}/>
                </div>
        </div>
    )
}