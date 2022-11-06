import React from 'react'
import { useNavigate } from "react-router-dom";
import asl from '../images/ASL.pdf'

import './Choice.css'
function Choice() {
    let history = useNavigate();
    return (
        <>
            <div className="choice-section choice-grid">
            <div className='choice-card' onClick={() => history('/videos')}>
                    <i className="zmdi zmdi-videocam secondary-text-icon zmdi-hc-3x"></i>
                    <h2 className='home-h2'>Video Lectures<span class="secondary-text dot">.</span></h2>
                    <p>
                        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque fugit
                        molestiae placeat nesciunt autem et quos sapiente voluptates, magnam
                        doloribus? */}
                    </p>
                </div>
          
                <div className='choice-card'onClick={() => history('/readings')}>
                    <i class="zmdi zmdi-blur secondary-text-icon zmdi-hc-3x"></i>
                    <h2 className='home-h2'>Reading Material<span class="secondary-text dot">.</span></h2>
                    <p className="home-p">
                         {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque fugit
                        molestiae placeat nesciunt autem et quos sapiente voluptates, magnam
                        doloribus? */}
                    </p>
                </div>
                <div className='choice-card'>
                    <i class="zmdi zmdi-account-box-o secondary-text-icon zmdi-hc-3x"></i>
                    <h2>Interpreter<span class="secondary-text dot">.</span></h2>
                    <p className="home-p">
                        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque fugit
                        molestiae placeat nesciunt autem et quos sapiente voluptates, magnam
                        doloribus? */}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Choice