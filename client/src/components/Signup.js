import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import signupImg from '../images/signup-image.png'
import './Signup.css'
function Signup() {
    const history = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });
    let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log('Invalid Registration');

        } else {
            window.alert("Registration Successfull");
            console.log('Registration Successfull');
            history("/login");
        }
    }

    return (
        <>
            {/* <!-- Sign up form --> */}
            <section class="signup">
                <div class="page-container mt-5" >
                    <div class="signup-content" >
                        <div class="signup-form" >
                            <h2 class="form-title">Sign up</h2>
                            <form method="POST" class="register-form" id="register-form" >
                                <div class="form-group" >
                                    <label htmlFor="name" ><i className="zmdi zmdi-account material-icons-name signup-icon"></i></label>
                                    <input type="text" name="name" id="name" autoComplete="off" value={user.name}
                                        onChange={handleInput} placeholder="Your Name" />
                                </div>
                                <div class="form-group">
                                    <label for="email"><i class="zmdi zmdi-email signup-icon"></i></label>
                                    <input type="email" name="email" id="email" autoComplete="off" value={user.email}
                                        onChange={handleInput} placeholder="Your Email" />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="phone"><i class="zmdi zmdi-phone in talk signup-icon"></i></label>
                                    <input type="number" name="phone" id="phone" autoComplete="off" value={user.phone}
                                        onChange={handleInput} placeholder="Your Phone" />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="work"><i class="zmdi zmdi-slideshow signup-icon"></i></label>
                                    <input type="text" name="work" id="work" autoComplete="off" value={user.work}
                                        onChange={handleInput} placeholder="Your Profession" />
                                </div>
                                <div class="form-group">
                                    <label for="pass"><i class="zmdi zmdi-lock signup-icon"></i></label>
                                    <input type="password" name="password" id="password" autoComplete="off" value={user.password}
                                        onChange={handleInput} placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <label for="re-pass"><i class="zmdi zmdi-lock-outline signup-icon"></i></label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword}
                                        onChange={handleInput} placeholder="Repeat your password" />
                                </div>
                                <div class="form-group form-button">
                                    <input type="submit" name="signup" id="signup" class="form-submit" value="Register" onClick={PostData} />
                                </div>
                            </form>
                        </div>
                        <div class="signup-image">
                            <figure><img className='sign-img' src={signupImg} alt="" /></figure>
                            <NavLink to="/login" className="signup-image-link">I am already member</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
