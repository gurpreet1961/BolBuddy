import React, { useState } from 'react'
import './Videos.css'
import ReactPlayer from 'react-player'
import courses from './videodata.jsx'
function Videos() {
    let color;
    const [bg, SetBg] = useState(color);
    const [vid, uid] = useState(courses[0].vid);
    const [title, utit] = useState(courses[0].title);
    const ChangeBg = (id) => {
        SetBg(color="");
        var elements = document.getElementsByClassName('video-ul');
        var elements2 = document.getElementsByClassName(id);
        for(var i = 0; i < elements.length; i++){
            if(elements[i] === elements2[0]){
                elements[i].classList.add("white");
            }else{
                elements[i].classList.remove("white");
            } 
        }
        
    }
    const renderVideo = () => {
        return (
            <>
                <div className="video-box">
                    <h4 className="video-heading">{title}</h4>
                    <div className="player-wrapper">
                        <ReactPlayer
                            className='react-player'
                            url={'https://www.youtube.com/watch?v=' + vid}
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="video-page">
            {renderVideo()}
            <div className="list-box">
                {
                    courses.map(item => {
                        return (
                            <ul className={`video-ul ${item.vid}`}
                                style={{ backgroundColor: bg }}
                            >
                                <li className='video-li'

                                >
                                    <a href="#!"
                                        className="video-link"
                                        onClick={() => {
                                            uid(item.vid);
                                            utit(item.title);
                                            ChangeBg(item.vid);

                                        }}><p className='video-list'>{item.no} <span className='video-title'>{item.title}</span></p> </a>
                                </li>
                            </ul>

                        )
                    })
                }
            </div>
        </div >
    )
}

export default Videos