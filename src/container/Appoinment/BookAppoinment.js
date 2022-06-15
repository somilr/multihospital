import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
function BookAppoinment(props) {

    const phoneRegExp = /^[0-9]{10}$/

    const handleSignup = (values) => {
        let data = JSON.parse(localStorage.getItem("users"))

        if (data === null) {
            localStorage.setItem("users", JSON.stringify([values]))
        } else {
            data.push(values)
            localStorage.setItem("users", JSON.stringify(data))
        }
    }
    let schema = yup.object().shape({
        name: yup.string().required('please enter name'),
        email: yup.string().required('please enter email').email('enter valid email'),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('please enter phone number'),
        date: yup.string().required('please enter date'),
        department: yup.string().required('please select department'),
        message: yup.string().required('please enter message')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            handleSignup(values)
        },
    });

    console.log(formik.errors.name);
    return (
        <section id="appointment" className="appointment">
            <div className="container">
            <center>
                    <div className='row'>
                        <div className='col-6'>
                            <NavLink className='active' to={'/BookAppoinment'}>
                                Book appointment
                            </NavLink>
                        </div>
                        <div className='col-6'>
                            <NavLink className='active' to={'/ListAppoinment'}>
                            List appointment
                            </NavLink>
                        </div>

                    </div>
                </center>
                <Formik value={formik}>
                    <Form onSubmit={formik.handleSubmit} className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name" placeholder="Your Name"
                                    onChange={formik.handleChange} />
                                {
                                    formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    onChange={formik.handleChange} />
                                {
                                    formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone" id="phone"
                                    placeholder="Your Phone"
                                    onChange={formik.handleChange} />
                                {
                                    formik.errors.phone && formik.touched.phone ? <p>{formik.errors.phone}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input
                                    type="datetime"
                                    name="date"
                                    className="form-control datepicker"
                                    id="date"
                                    placeholder="Appointment Date"
                                    onChange={formik.handleChange} />
                                {
                                    formik.errors.date && formik.touched.date ? <p>{formik.errors.date}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select
                                    name="department"
                                    id="department"
                                    className="form-select"
                                    onChange={formik.handleChange}>
                                    <option value>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                {
                                    formik.errors.department && formik.touched.department ? <p>{formik.errors.department}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Message (Optional)"
                                defaultValue={""}
                                onChange={formik.handleChange} />
                            {
                                formik.errors.message && formik.touched.message ? <p>{formik.errors.message}</p> : ''
                            }
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <a onClick={() => {
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            }}></a>

                        </div>
                        <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </Form>
                </Formik>
            </div>
        </section>

    );
}

export default BookAppoinment;