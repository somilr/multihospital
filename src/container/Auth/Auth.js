import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Auth(props) {

    const [usertype, setuserType] = useState('Login');
    const [password, setpassword] = useState(false)
    const handleLogin = (values) => {
        alert(JSON.stringify(values, null, 2));
    }
    const handleSignup = (values) => {
        alert(JSON.stringify(values, null, 2));
    }
    const passwordchng = () => {

    }
    let login = {
        
        email: yup.string().email('please enter valid email').required('please enter your email'),
        password: yup.string().required('please enter your password'),
    }
    let Signup = {
        name: yup.string().required('please enter name'),
        email: yup.string().email('please enter email').required('please enter your email'),
        password: yup.string().required('please enter your password'),
    }
    let schema ,initval

    if (usertype === 'Login') {
         schema = yup.object().shape(login)
        initval = {
            
                email: '',
                password: ''
            
        }

    } else if (usertype === 'singup') {
         schema = yup.object().shape(Signup)
        initval= {
            
                name:'',
                email:'',
                password: ''
            

    }
}

const formik = useFormik({
    initialValues: initval,
    validationSchema: schema,
    onSubmit: (values, {resetForm}) => {
        if (usertype === 'Login') {
            handleLogin(values)
        }else if (usertype === 'Signup') {
            handleSignup(values)
        }   
        resetForm();
    },
})
console.log(formik.errors.email);
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
                <Formik value={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            
                            {

                                usertype === 'Login' ?
                                    null
                                    :
                                    <div className="col-md-7 form-group mt-3 mt-md-0">
                                        <input 
                                            type="name"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name" 
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                            onBlur={formik.handleBlur} />
                                        {
                                            formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : null
                                        }
                                        <div className="validate" />
                                      
                                    </div>

                            }
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input 
                                type="email" 
                                className="form-control"
                                placeholder='your email'
                                 name="email" 
                                 id="email" 
                              
                                 onChange={formik.handleChange}
                                 value={formik.values.email}
                                 onBlur={formik.handleBlur}
                                 />
                                 {
                                     formik.errors.email && formik.touched.email ?<p>{formik.errors.email}</p> : null
                                 }
                                

                                
                                <div className="validate" />
                            </div>
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password" 
                                    id="phone"
                                    placeholder="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password} 
                                    onBlur={formik.handleBlur}/>
                                <div className="validate" />
                                {
                                            formik.errors.password && formik.touched.password ?<p>{formik.errors.password}</p> : null
                                        }
                                      
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
                                        <button type='submit' onClick={() => handleLogin()}>Login</button><br></br>
                                    </div> :
                                    <div className="text-center">
                                        <button  onClick={() => handleSignup()} >signup</button>
                                    </div>
                        }
                        {

                            password === true ?
                                <div className='text-center mt-5'>
                                    <span>already have an account ?</span>
                                    <a onClick={() => setpassword(false)}>Login</a>
                                </div> :
                                usertype === 'Login' ?
                                    <div className='text-center mt-5'>
                                        <span>create a New account</span>
                                        <button>
                                        <a onClick={() => { setuserType('Signup') }} >signup</a> </button><br></br>
                                        <a  className="mt-4" onClick={() => { setpassword(true) }}>Forget password</a>
                                    </div> :
                                    <div className='text-center mt-5'>
                                        <span>already have an account ?</span>
                                        <a onClick={() => { setuserType('Login') }} >Login</a>
                                    </div>
                        }
                    </Form>
                </Formik>
            </div>
        </div>
    </section>
);
}

export default Auth;
