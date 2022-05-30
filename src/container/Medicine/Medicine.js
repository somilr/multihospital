import React from 'react';
import List from '../../componet/List/List';

const medicine = [
    {
        id: 101,
        name: 'Abacavir',
        quantity: 25,
        price: 150,
        expiry: 2022,
        status: true
    },
    {
        id: 102,
        name: 'Eltrombopag',
        quantity: 90,
        price: 550,
        expiry: 2021,
        status: true
    },
    {
        id: 103,
        name: 'Meloxicam',
        quantity: 85,
        price: 450,
        expiry: 2025,
        status: false
    },
    {
        id: 104,
        name: 'Allopurinol',
        quantity: 50,
        price: 600,
        expiry: 2023,
        status: true
    },
    {
        id: 105,
        name: 'Phenytoin',
        quantity: 63,
        price: 250,
        expiry: 2021,
        status: false
    }
];
const EmployeeData =[
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];

function Medicine(props) {
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Medicdine Data</h2>
                   
                </div>
                <form action method="post" role="form" className="php-email-form">
                    <div className="row">
                        <List data={medicine} />
                        <List data={EmployeeData} />

                    </div>
                </form>
            </div>
        </section>

    );
}

export default Medicine;