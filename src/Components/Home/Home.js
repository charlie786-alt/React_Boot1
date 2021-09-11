import React from 'react';
import './Home.css';
function Home() {
    return (
        <>
            <div className="body_main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 left_body d-flex flex-column justify-content-center align-items-center">
                            <div className="left_body_para ">
                                <h1>Grow Your Business With <strong>CHARLIE_WORLD</strong></h1>
                                <h4>We are a team of most energetcic developers who can change <br /> your ideas into native programming command <br /> within a short time.</h4>
                                <button className="btn btn1 "> GET STARTED </button>
                            </div>
                        </div>
                        <div className="col-md-4 right_body  d-flex justify-content-center align-items-center">
                            <div className="right_body_para ">
                               
                                <img className="img-fluid animated" src="./images/web1.jpg" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home
