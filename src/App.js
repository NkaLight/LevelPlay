import React from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


export default function App() {

  /**OUR STATES */
  const [hasAccount, setHasAccount] = React.useState(false)


  const [gameInitiated, setGameInitiated] = React.useState(false)
  
  /**Look at this as a question Login? so if not then sign in, if not that then continue as guest */
  const [login, setLogin] = React.useState(false)
  
/*function changes the login boolena state*/
function updateLogin(){
  setLogin(prevState => !prevState)
}

  /**function updates the hasAccount state */
  function updateHasAccount(){
    setHasAccount(true)
  }
  /**Function update the gameInitated state for the user to start getting to play the game */
  function initiateGameplay(){
    setGameInitiated(true)
  }


  return (
    <div className='App'>
      {hasAccount && <h1 className='form'>Hello React</h1>}
      <Navbar
        hasAccount={hasAccount}
        login={login}
        updateLogin={updateLogin}
        gameInitiated={gameInitiated}
        setGameInitiated={setGameInitiated}
      />
      <MainContent
        login={login}
        hasAccount={hasAccount}
        updateAccount={updateHasAccount}
        gameInitiated ={gameInitiated}
        updateGameInitiated = {initiateGameplay}
      />
      <Footer />
    </div>
  )
}


