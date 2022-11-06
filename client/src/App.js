import React, { createContext, useReducer } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import Contact from './components/Contact'
// import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Videos from './components/Videos'
import Choice from './components/Choice'
import Readings from './components/Readings'
import Logout from './components/Logout'
// import Logout from './components/Logout'
import './App.css'
import { initialState, reducer } from './reducer/UseReducer';

//context api
export const UserContext = createContext();

const Routing = () => {
  return (
    <>
    
    <Router>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/videos" element={<Videos />} />
      </Routes>
      <Routes>
        <Route path="/readings" element={<Readings />} />
      </Routes>
      <Routes>
        <Route path="/choice" element={<Choice />} />
      </Routes>
      <Routes>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
    </>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (

    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routing />
      </UserContext.Provider>
    </>
  )
}

export default App
