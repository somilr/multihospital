import React from "react";
import { NavLink } from "react-router-dom";

function ContactList(props) {
  let data = JSON.parse(localStorage.getItem("users"));

  return (
    <div>
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
            aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
            sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet
            aliquet rhoncus quis, luctus at neque. Mauris sit amet massa sed
            orci vehicula facilisis.
          </p>
        </div>
        <div className="row text-center">
          <div className="row text-center">
            <div className="col-6">
              <NavLink to={"/Contact"}>Contact</NavLink>
            </div>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
  
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          {data.map((d, l) => {
            console.log(d);
          return(
            <tr>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{d.subject}</td>
            <td>{d.subject}</td>
          </tr>
          )
          })}
        </table>
      </div>
    </div>
  );
}

export default ContactList;
