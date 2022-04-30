import React, { useState } from 'react';

function Auth() {
     const [reset, SetReset] = useState (false)
    const [usertype, setusertype] = useState('Login');
    const heandleLogin=() => {
        
    }
    const heandleSignup =() =>{
        
    }
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        usertype === 'Login' ?
                            <h2>Login</h2> :
                            <h2>Signup</h2>
                    }

                </div>
                <div className="php-email-form">
                    <div className="row">
                        <div className="col-md-7 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />

                        </div>
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        {
                            usertype === 'Login' ? null
                                :
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                </div>

                        }
                        {
                            usertype === 'Login' ? <div className="text-center" ><button className='mb-2' type="submit" onClick={() => heandleLogin()}>Login </button></div> :
                                <div className="text-center" onClick={() => heandleSignup()}><button type="submit">Signup</button></div>
                        }
                    </div>
                    {
                        usertype === 'Login' ?
                            <div className='text-center'>
                                <a href='#' className='text-dark'> creat a new account</a>
                                <button className='ms-3' type="submit"  onClick={() => heandleSignup()}>
                                    <span>Signup</span>
                                </button>
                            </div> :
                            <div className='text-center'>
                                <span>already account</span>
                                <button type="submit" className='ms-3' onClick={() => heandleLogin()}>
                                    <span>Login</span>
                                </button>
                            </div>

                    }


                   
                </div>
            </div>
        </section>



    );
}

export default Auth;