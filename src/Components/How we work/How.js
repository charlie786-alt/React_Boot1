import React, { useState } from 'react'
import "./How.css";

import Howapi from './Howapi';
function How() {
    const [api, setApi] = useState(Howapi);

    return (
        <>
            <div className="how_cont">
                <div className="container">
                    <h1 className="text-center fw-bold ">How We Transact <span>?</span> </h1>
                    <div className="row">
                        {
                            api.map((curElem) => {
                                const { id, logo, info, title } = curElem;
                                return (
                                    <>
                                       
                                            <div className="col-md-4 text-center how_box">
                                                <div className="boxy">
                                                   
                                                    <h2>{title}</h2>
                                                    <h4>{info}</h4>
                                                </div>
                                            </div>
                                     


                                    </>
                                )


                            })
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default How
