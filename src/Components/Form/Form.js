import React from 'react'
import './Form.css'
function Form() {
    return (
        <>
            <div className="form_box">
                <div className="container">
                    <div className="row d-flex justify-content-around">
                        <div className="col-md-4 form_left">
                            <h2>Wanna Connect With Our Sales Team..?</h2>
                            <h4>Lorem ipse, provident, laboriosam illum  provident, laboriosam illum od  odio saepe?</h4>
                            <img src="./images/sales.jpg" alt="" />
                        </div>
                        <div className="col-md-5 form_right ">
                            <h2 className="text-center"><span>Register</span> With Us..!</h2>
                            <form autoComplete="off" method="POST">
                                <div className="form_main">
                                    {/* <label htmlFor=""><h4>Enter Your Name</h4></label> */}
                                    <input type="text" name="" id="" placeholder="Enter Your Name" />
                                    {/* <label htmlFor=""><h4>Enter Your Name</h4></label> */}
                                    <input type="password" name="" id="" placeholder="Enter Your Password" />
                                    {/* <label htmlFor=""><h4>Enter Your Name</h4></label> */}
                                    <input type="text" name="" id="" placeholder="Enter Your Email Id" />
                                    {/* <label htmlFor=""><h4>Enter Your Name</h4></label> */}
                                    <input type="text" name="" id="" placeholder="Enter Your Phone No" />
                                    {/* <label htmlFor=""><h4>Enter Your Name</h4></label> */}
                                    <input type="text" name="" id=""  placeholder="Enter Your Address" />


                                </div>

                            </form>
                            <button className="btn btn1 btnsubmit ">Submit</button>
                        </div>
                    </div>
                </div>




            </div>








        </>
    )
}

export default Form
