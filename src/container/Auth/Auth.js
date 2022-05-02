import React, { usestate } from 'react';

function Auth() {
    // const [reset, SetReset] = usestate (false)
    const [usertype, setusertype] = usestate('Login');
    const heandleLogin=() => {
        
    }
    const heandleLogin =() =>{
 
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
                            usertype === 'Login' ? <div className="text-center" ><button type="submit" onClick={() => heandleLogin()}>>Login </button></div> :
                                <div className="text-center" onClick={() => heandleLogin()}><button type="submit">Signin</button></div>
                        }
                    </div>
                    {
                        usertype === 'Login' ?
                            <div className='text-center'>
                                <span>creat a new account</span>
                                <button className='btn-danger' onClick={() => heandleLogin()}>
                                    <span>Login</span>
                                </button>
                            </div> :
                            <div className='text-center'>
                                <span>already account</span>
                            </div>

                    }


                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                    </div>

                </div>
            </div>
        </section>



    );
}

export default Auth;