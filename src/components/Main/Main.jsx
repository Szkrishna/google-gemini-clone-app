/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react';
import './Main.css';
import { assets } from "../../assets/assets";
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Main = () => {
    const { onSent, recentPrompt, showResult, loadingState, resultDataState, resultData, setInputState, inputState, setInput, input } = useContext(Context)
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                {!showResult 
                    ? 
                        <>
                            <div className="greet">
                                <p><span>Hello, Dev.</span></p>
                                <p>How can i help you today</p>
                            </div>
                            <div className="cards">
                                <div className="card">
                                    <p>Suggest beauiful place to see on an upcoming road trip</p>
                                    <img src={assets.compass_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Breifly summarize this concept: urban planning</p>
                                    <img src={assets.bulb_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Brainstorm tean bonding activities for our work retreat</p>
                                    <img src={assets.message_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Improve the readibility of the following code</p>
                                    <img src={assets.code_icon} alt="" />
                                </div>
                            </div>
                        </> 
                    :
                        <div className='result'>
                            <div className="reult-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="resulr-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loadingState 
                                    ?
                                        <div className="loader">
                                            <hr />
                                            <hr />
                                            <hr />
                                        </div> 
                                    :
                                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }
                            </div>
                        </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>Gemini my display inaccurate info, including about people, so doubt-check its responses. Your privacy and Gemini App</p>
                </div>
            </div>
        </div>
    )
}

export default Main;