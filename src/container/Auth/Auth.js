import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Auth(props) {
    const [reset, SetReset] = useState(false)
    const [usertype, setUsertype] = useState('Login');
    const heandleLogin = () => {

    }
    const heandlesginup = () => {

    }
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    { reset === true ? <h2>Forget password</h2> :
                        usertype === 'Login' ?
                            <h2>Login</h2> :
                            <h2>Signup</h2>
                            
                    }
                        {
                        reset ?
                        <h2>Forget Password</h2> :
                            usertype === 'reset' ? <h2>Reset passwod</h2> : null
                        }
                </div>
                <div className="php-email-form">
                    <div className="row">

                        {
                            usertype === 'Login' ? null : <div className="col-md-7 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                        }
                        
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />

                        </div>


                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>


                    </div>
                    {
                        usertype === 'Login' ?
                            <div className='text-center'>
                                <span>creat a new account</span>
                                <button type='submit' className='rounded-pill ms-2' onClick={() => setUsertype('Signup')}>
                                    <span>Login</span>
                                </button>
                            </div> :
                            <div className='text-center'>
                                <span>already account</span>
                                <button className=' rounded-pill ms-2' type='submit' onClick={() => setUsertype('Login')}>
                                    <span>Signup</span>
                                </button>
                            </div>
                    }
                          
                         {
                                reset === true ?
                                <NavLink to={'#'} onClick={() => SetReset (true)} className='text-center' >Forget password</NavLink>
                                : null
                         }   
                    {
                        reset === true ? <div className='text-center'>
                            <button className=' rounded-pill ms-2 mt-4' type='submit' onClick={() => SetReset(true)}>
                                <span>Reset Password</span>
                            </button>
                        </div> : null
                    }

                </div>
            </div>
        </section>
    );
}

export default Auth;