import {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import CharacterDetails from './components/characterDetails';
import PageWrapper from './components/pagewrapper';
import Home from './components/Pages/home'
import CharacterList from './components/Pages/characterList'
import LoginPage from './components/Pages/loginPage';
import CreateACharacter from './components/Pages/CreateACharacter';


function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path='/' element={<Home />} exact={true}/>
          <Route path='/characters' element={<CharacterList />} />
          <Route path='/characters/:characterId' element={<CharacterDetails />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/characters/create-a-character' element={<CreateACharacter />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
