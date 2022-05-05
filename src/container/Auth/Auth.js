import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

function Auth(props) {

    const [usertype, setuserType] = useState('Login');
    const [password, setpassword] = useState(false)
    const handleLogin = () => {

    }
    const handleSignup = () => {

    }
    const passwordchng = () => {

    }
    let login = {
        email: yup.string().email('please enter valid email').required('please enter your email'),
        password: yup.string().required('please enter your password'),
    }
    let singup = {
        name: yup.string().required('please enter name'),
        email: yup.string().email('please enter email').required('please enter your email'),
        password: yup.string().required('please enter your password'),
    }
    let loginSchema ,initval

    if (usertype === 'Login') {
        let loginSchema = yup.object().shape(login)
        initval = {
            
                email: '',
                password: ''
            
        }

    } else if (usertype === 'singup') {
        let loginSchema = yup.object().shape(singup)
        initval= {
            
                name:'',
                email:'',
                password: ''
            

    }
}

const formik = useFormik({
    initialValues: initval,
    validationSchema: loginSchema,
    onSubmit: (values, {resetForm}) => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
    },
})
console.log(formik.errors);
return (
    <section id="appointment" className="appointment">
        <div className="container">

            {
                password ?
                    <div className="section-title">
                        <h2 className='centeerr'>Forget password</h2>
                    </div>
                    : usertype === 'Login' ?
                        <div classname="section-title">
                            <h2 className="centeerr">Login</h2>
                        </div>
                        :
                        <div classname="section-title">
                            <h2 className="centeerr">Signup</h2>
                        </div>

            }
            <div action method="post" className="php-email-form">
                <formik value={formik}>
                    <form onsubmit={formik.handleSubmit}>
                        <div className="row">
                            {
                                password === true ? <div className="col-md-12 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control" name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email} />
                                        <p>{formik.errors.email}</p>
                                    <div className="validate" />
                                </div> : null
                            }
                            {

                                usertype === 'Login' ?
                                    null
                                    :
                                    <div className="col-md-12 form-group mt-3 mt-md-0">
                                        <input type="name"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name" 
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                            />
                                        <div className="validate" />
                                             <p>{formik.errors.name}</p>
                                    </div>

                            }
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password" id="phone"
                                    placeholder="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password} />
                                <div className="validate" />
                                <p>{formik.errors.password}</p>
                            </div>
                        </div>
                        {
                            password ?
                                <div className="text-center">
                                    <button type="submit" className="mt-4" onClick={() => passwordchng()}>Forget password</button><br></br>
                                </div>
                                :
                                usertype === 'Login' ?
                                    <div className="text-center">
                                        <button type="submit" onClick={() => handleLogin()}>Login</button><br></br>
                                    </div> :
                                    <div className="text-center">
                                        <button type="submit" onClick={() => handleSignup()} >signup</button>
                                    </div>
                        }
                        {

                            password === true ?
                                <div className='text-center mt-5'>
                                    <span>already have an account ?</span>
                                    <button type="submit" onClick={() => setpassword(false)}>Login</button>
                                </div> :
                                usertype === 'Login' ?
                                    <div className='text-center mt-5'>
                                        <span>create a New account</span>
                                        <button type='submit' onClick={() => { setuserType('Signup') }} >signup</button> <br></br>
                                        <button type="submit" className="mt-4" onClick={() => { setpassword(true) }}>Forget password</button>
                                    </div> :
                                    <div className='text-center mt-5'>
                                        <span>already have an account ?</span>
                                        <button type="submit" onClick={() => { setuserType('Login') }} >Login</button>
                                    </div>
                        }
                    </form>
                </formik>
            </div>
        </div>
    </section>
);
}

export default Auth;
