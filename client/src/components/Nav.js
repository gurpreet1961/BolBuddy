import React, {useContext, useEffect, useState } from 'react'
import "./Nav.css";
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo2.png'
import {UserContext} from '../App';


const Nav = () => {
   
    
    const {state} = useContext(UserContext);


    const RenderMenu = () => {
        if(state){
            return(
                <>
                     <ul>
                    <li><NavLink to="/" >Home</NavLink></li>
                    {/* <li><NavLink to="/about" >About</NavLink></li> */}
                    <li><NavLink to="/contact" >Contact</NavLink></li>
                    <li><NavLink to="/logout" >Logout</NavLink></li>
                    <span className="user">{show?<li className="username" >{userName}</li>:""}</span>   
            </ul>
                </>
            )
        }else{
            return(
                <>
                <ul>
                    <li><NavLink to="/" >Home</NavLink></li>
                    {/* <li><NavLink to="/about" >About</NavLink></li> */}
                    <li><NavLink to="/contact" >Contact</NavLink></li>
                    <li><NavLink to="/login" >Login</NavLink></li>
                    <li><NavLink to="/signup" >Register</NavLink></li>  
               </ul>
                </>
            )
        }
    }
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    const [userName, setUserName] = useState("");
    const callNavPage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            //console.log(data);
			    setUserName(data.name);
          setShow(true);
        } catch (err) {
          //  console.log(err);
        }
    }
    useEffect(() => {
        callNavPage();
    }, []);
 

    return (
        <nav className="navbar">
            <div className="brand-title">
            <NavLink to="/" ><img src={Logo} alt="" /></NavLink>
            </div> 
        
            
        <a href="#0" className="toggle-button" onClick={() => setOpen(!open)}>  {/*toggle button */}
                <span className="bar" ></span>
                <span className="bar" ></span>
                <span className="bar" ></span>
            </a>
            
            <div className={`navbar-links ${open ? 'active' : ''}`}>
                <RenderMenu />
           
        </div>
    </nav>

            )
}

 export default Nav
