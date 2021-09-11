import React, { useState } from 'react'
import AboutApi from './AboutApi';
import './AboutUs.css';
function AboutUs() {
    const [about, setAbout] = useState(AboutApi);
    return (
        <>
            <div className="about">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-5 about_left">
                            <img src="./images/int.jpg" alt="" />
                        </div>

                        <div className="col-md-7">
                            <h1 className="text-center">How To Use This App ? </h1>
                            {
                                about.map((curElem) => {
                                    const { id, title, info } = curElem;
                                    return (
                                        <>
                                            <div className="use_box">
                                                <div className="use_box_no">{id}</div>
                                                <div className="use_box_info">
                                                    <h2> {title} </h2>
                                                    <p> {info} </p>
                                                </div>
                                            </div>

                                        </>

                                    )
                                })

                            }


                            <button className="btn1 btn-primary  mb-4"><h3>Learn More</h3></button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
