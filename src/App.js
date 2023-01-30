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
import { WithSymbolsPage } from './pages/WithSymbolsPage';
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
					<Route path='/' element={<HomePage/>}/>
					<Route path='/levels' element={<LevelsPage/>}/>
					<Route path='/settings' element={<SettingsPage/>}/>
					<Route path='/levels/lowercased' element={<LowerCasedPage/>}/>
					<Route path='/levels/uppercased' element={<UpperCasedPage/>}/>
					<Route path='/levels/with-symbols' element={<WithSymbolsPage/>}/>
					<Route path='/version-history' element={<VersionHistory/>}/>
					<Route path='/to-employer' element={<ToEmployerPage/>}/>
				</Routes>
				</SoundContext.Provider>

				<VersionSection/>

			</ColorThemeContext.Provider>
		</Router>
		
	</div>
	)
}

export default App;
