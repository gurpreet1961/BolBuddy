import React, { useEffect } from 'react'
import Nav from './Nav'
import './Home.css'
import Rellax from "rellax";
import bgImage from '../images/bg3.png'
import {NavLink} from 'react-router-dom'

function Home() {

    useEffect(() => {
       let rellax = new Rellax(".rellax")
    }, []);
        return (

            <>
                <section class="section section-top">
                <img src={bgImage} className='globe' alt="" />
                {/* <img src="https://bestanimations.com/media/spheres/1587197678sphere-computer-effects-3d-animated-gif-37.gif" className='globe' alt="" /> */}
                    <div class="content rellax" data-rellax-speed="5">
                        <h1 className='home-h1'>Bol Buddy</h1>
                        
                        <NavLink to="/choice" className="home-btn">Get Started</NavLink> 
                    </div>
                </section>
                <section class="section section-stream">
                    <img
                        class="play rellax"
                        src="https://i.ibb.co/Fn2SWJh/play.png"
                        alt="Play"
                        data-rellax-speed="0"
                        data-rellax-xs-speed="-8"
                    />
                    <div class="content rellax" data-rellax-speed="10">
                        <div>
                            <h2 className='home-h2' class="secondary-text">Learn American Sign Language</h2>
                            <p>
                            ASL is a complete and organized visual language. One can express their thoughts by just movement of their fingers.
                            </p>
                        </div>
                        <div>
                            <h2 className='home-h2' class="secondary-text">Practice With AI Enabled Bot</h2>
                            <p>
                                You can also parctice ASL with our AI enabled bot by just turning on your camera. In can detect your hand gestures ans shows result accordingly.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="section section-grid">
                    <div class="rellax" data-rellax-speed="0" data-rellax-xs-speed="8">
                    <i className="zmdi zmdi-videocam secondary-text-icon zmdi-hc-3x"></i>
                        {/* <i class="fas fa-video fa-3x secondary-text"></i> */}
                        <h2 className='home-h2'>Watch<span class="secondary-text dot">.</span></h2>
                        <p>
                          ASL (American Sign Language).  Learn ASL by immersion. You'll be amazed at how quickly you can start having real conversations in ASL.  Dr. Bill Vicars (Deaf/hh) of "ASL University" will teach you ASL using his innovative and interactive question-based approach.  
                        </p>
                    </div>
                    <div class="rellax" data-rellax-speed="1.5" data-rellax-xs-speed="8">
                    <i class="zmdi zmdi-account-box-o secondary-text-icon zmdi-hc-3x"></i>
                        {/* <i class="fas fa-users fa-3x "></i> */}
                        <h2>Practice<span class="secondary-text dot">.</span></h2>
                        <p className="home-p">
                        The system, when provided with the
                        proper gestures, gives out the
                        corresponding words. The system can
                        provide proper results even when there are
                        some slight variations in gestures. There
                        will be different kinds of variations from
                        different kinds of persons performing the
                        gestures
                        </p>
                    </div>
                    <div class="rellax" data-rellax-speed="3" data-rellax-xs-speed="8">
                    <i class="zmdi zmdi-blur secondary-text-icon zmdi-hc-3x"></i>
                        {/* <i class="fas fa-book fa-3x secondary-text"></i> */}
                        <h2 className='home-h2'>Learn<span class="secondary-text dot">.</span></h2>
                        <p className="home-p">
                           One can read the bool in order to learn the sign language. The book will contain pictures of different hand gestures along with proper explanation in easy words. 
                        </p>
                    </div>
                </section>
            </>

        )

    }

export default Home