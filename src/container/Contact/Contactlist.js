import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Contactlist(props) {

    let data = JSON.parse(localStorage.getItem("users"))
 
    console.log(data);
  return (
    <>
    <h1>contactlist</h1>
               <div className="section-title">
                    <h2>Contact</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
         <div className="row text-center">
                    <div className="col-6">
                        <NavLink to={"/Contact"}>Contact</NavLink>
                    </div>
                    <div className="col-6">
                        <NavLink  to={"/Contactlist"}>Contactlist</NavLink>
                    </div>
        </div>
         
                   <div>
                        {
                            data.map((d, i) => {
                                
                                return (
                                    <>
                                        <h2>{d.name}</h2>
                                        <h2>{d.email}</h2>
                                        <h2>{d.subject}</h2>
                                        <h2>{d.message}</h2>
                                    </>
                                )
                            })
                        }
                    </div>

    </>
  )
}



