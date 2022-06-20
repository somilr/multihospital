import React from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import InputBox from "../../componet/InputBox/InputBox";

function Appointment(props) {
  const history = useHistory();

  let schema = yup.object().shape({
    name: yup.string().required("please enter name"),
    email: yup.string().required("enter email").email("enter valid email"),
    phone: yup.number().min(10).required("please enter number"),
    date: yup.date().required("please enter date"),
    message: yup.string().required("please enter message"),
  });

  const handleSubmit = (values) => {
    const data = JSON.parse(localStorage.getItem("users"));

    console.log(data);

    if (data === null) {
      localStorage.setItem("users", JSON.stringify([values]));
    } else {
      data.push(values);
      localStorage.setItem("users", JSON.stringify(data));
    }

    history.push("/listappointment");
  };

  // const handleClick = () => {

  // }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handleSubmit(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleChange, error, handleBlur, touched } = formik;

  // console.log(formik.errors);
  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>
            Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
            aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
            sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia
            finibus tortor. Curabitur luctus eleifend odio. Phasellus placerat
            mi et suscipit pulvinar.
          </p>
        </div>
        <div className="row text-center">
          <div className="col-6">
            <NavLink to={"/bookappointment"}>Bookappoinment</NavLink>
          </div>
          <div className="col-6">
            <NavLink to={"/listappointment"}>Listappoinment</NavLink>
          </div>
        </div>
        <Formik value={formik}>
          <Form
            onSubmit={formik.handleSubmit}
            action
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-md-4 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  error={error?.name && touched?.name}
                  onBlur={handleBlur}
                  errormsg={error?.name}
                />

                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <InputBox
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  error={error?.email && touched?.email}
                  errormsg={error?.email}
                />

                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <InputBox
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  error={error?.phone && touched?.phone}
                  errormsg={error?.Phone}
                />

                <div className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <InputBox
                  type="date"
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                  onBlur={handleBlur}
                  error={error?.date && touched?.date}
                  errormsg={error?.date}
                />

                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="department"
                  id="department"
                  className="form-select"
                  onBlur={handleBlur}
                  errormsg={error?.department}
                  error={error?.department && touched?.department}
                >
                  <option value>Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
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
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
                errormsg={error?.message}
                error={error?.message && touched?.message}
              />

              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your appointment request has been sent successfully. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Make an Appointment</button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default Appointment;
