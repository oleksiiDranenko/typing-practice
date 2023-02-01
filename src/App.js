//styles
import './App.css';
//hooks and elements
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//custom elements
import { VersionSection } from './components/UI/VersionSection';
import { Navbar } from './components/Navigation/Navbar';
import { HomePage } from './pages/HomePage';
import { LevelsPage } from './pages/LevelsPage';
import { LowerCasedPage } from './pages/LowerCasedPage';
import { SettingsPage } from './pages/SettingsPage';
import { UpperCasedPage } from './pages/UpperCasedPage';
import { VersionHistory } from './pages/VersionHistory';
import { ToEmployerPage } from './pages/ToEmployerPage';
import { CustomisePage } from './pages/CustomisePage';

//creating context
export const ColorThemeContext = createContext();
export const SoundContext = createContext();
export const CustomArrayContext = createContext();

function App() {

	//creating states for the themes

	//colorTheme
	const [colorTheme, setColorTheme] = useState(() => {
		if(JSON.parse(localStorage.getItem('colorTheme')) === null){
			return true //default if there is no value in local storage
		} else {
			return JSON.parse(localStorage.getItem('colorTheme'))
		}
	});

	//soundTheme
	const [soundOn, setSoundOn] = useState(() => {
		if(JSON.parse(localStorage.getItem('soundOn')) === null){
			return false//default if there is no value in local storage
		} else {
			return JSON.parse(localStorage.getItem('soundOn'))
		}
	});

	//customArray
	const [customArray, setCustomArray] = useState(() => {
		if(JSON.parse(localStorage.getItem('customArray')) === null){
			return []//default if there is no value in local storage
		} else {
			return JSON.parse(localStorage.getItem('customArray'))
		}
	});

	
	return(
	<div className='App'>
		<Router>
			<ColorThemeContext.Provider value={{colorTheme, setColorTheme}}>

				<Navbar/>

				<CustomArrayContext.Provider value={{customArray, setCustomArray}}>
				<SoundContext.Provider value={{soundOn, setSoundOn}}>
					<Routes>
						<Route path='/typing-practice/' element={<HomePage/>}/>
						<Route path='/typing-practice/levels' element={<LevelsPage/>}/>
						<Route path='/typing-practice/settings' element={<SettingsPage/>}/>
						<Route path='/typing-practice/levels/lowercased' element={<LowerCasedPage/>}/>
						<Route path='/typing-practice/levels/uppercased' element={<UpperCasedPage/>}/>
						<Route path='/typing-practice/customise' element={<CustomisePage/>}/>
						<Route path='/typing-practice/version-history' element={<VersionHistory/>}/>
						<Route path='/typing-practice/to-employer' element={<ToEmployerPage/>}/>
					</Routes>
				</SoundContext.Provider>
				</CustomArrayContext.Provider>

				<VersionSection/>

			</ColorThemeContext.Provider>
		</Router>
		
	</div>
	)
}

export default App;
