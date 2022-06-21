import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ListAppintment() {
  const [data, setData] = useState([]);

  const loaddata = () => {
    const loaddata = JSON.parse(localStorage.getItem("users"));

    setData(loaddata)
  }

  useEffect(
    () => {
      loaddata()
    },
    [])

  return (
    <section id="appointment" classname="appointment">
      <div classname="container">
        <div classname="section-title">
          <h2>Make an Appointment</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
        </div>
        <div className="row text-center">
          <div className="col-6">
            <NavLink to={"/Appointment"}>Book Appoinment</NavLink>
          </div>
          <div className="col-6">
            <NavLink to={"/ListAppintment"}>List Appoinment</NavLink>
          </div>
        </div>
      </div>
      <div>
        {
          data.map((d, i) => {
            return (
            <>
                <h5>{d.name}</h5>
                <h5>{d.email}</h5>
                <h5>{d.phone}</h5>
                <h5>{d.date}</h5>
                <h5>{d.department}</h5>
                <h5>{d.message}</h5>
                </>
            )
          })
        }
      </div>
    </section>
  )
}