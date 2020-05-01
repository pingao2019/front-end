import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import SignupForm from './components/signup-form'
import SignInForm from './components/signInForm'
import PrivateRoute from './components/PrivateRoute'
import UserPage from './components/UserPage'
import './App.css'
import logo from './logo.svg'
//
import UserInputForm from './components/userInputForm'
import styled from 'styled-components'

const StyledNav = styled.div`
      display:flex;
      justify-content:space-between;
      width:25%;
      margin-left:65%;
      margin-bottom:5%;
`

function App() {
  return (
    <div className="App">
      <nav>
            <StyledNav>
                    <a href="index.html">Home</a>
                    
                    <a href="aboutUs.html">About</a>
                   
                    <a href="contact.html">Contact</a>
                    
                    <a href="strains.html">Strains</a>
                    
                    <a href="https://medicabinet.netlify.app/login">Login</a>
                    
                    <a href="https://medicabinet.netlify.app/signup">Sign-Up</a>
                
            </StyledNav>
            <img src="./logo.svg" alt="logo" className = "nav-logo"/>
        </nav>
      <Switch>
        <PrivateRoute exact path={'/userpage'} component={UserPage}/>
        <PrivateRoute exact path={'/addtreatment'} component={UserInputForm} />
        <Route exact path={'/signup'}>
          <h1>Welcome to the app new people!!</h1>
          <SignupForm />
        </Route>
        <Route exact path={'/login'}>
          <h1>Welcome to the app users!</h1>
          <SignInForm />
        </Route>
      </Switch>
    </div>
  )
}

export default App
