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

//creating context
export const ColorThemeContext = createContext();
export const SoundContext = createContext();

function App() {
	//if light - true
	//getting the colorTheme from the local storage 
	const [colorTheme, setColorTheme] = useState(JSON.parse(localStorage.getItem('colorTheme')));
	const [soundOn, setSoundOn] = useState(JSON.parse(localStorage.getItem('soundOn')));
	
	return(
	<div className='App'>
		<Router>
			<ColorThemeContext.Provider value={{colorTheme, setColorTheme}}>

				<Navbar/>

				<SoundContext.Provider value={{soundOn, setSoundOn}}>
				<Routes>
					<Route path='/typing-practice/' element={<HomePage/>}/>
					<Route path='/typing-practice/levels' element={<LevelsPage/>}/>
					<Route path='/typing-practice/settings' element={<SettingsPage/>}/>
					<Route path='/typing-practice/levels/lowercased' element={<LowerCasedPage/>}/>
					<Route path='/typing-practice/levels/uppercased' element={<UpperCasedPage/>}/>
					<Route path='/typing-practice/version-history' element={<VersionHistory/>}/>
					<Route path='/typing-practice/to-employer' element={<ToEmployerPage/>}/>
				</Routes>
				</SoundContext.Provider>

				<VersionSection/>

			</ColorThemeContext.Provider>
		</Router>
		
	</div>
	)
}

export default App;
