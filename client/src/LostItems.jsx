import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link if using React Router DOM
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './lostitems.css'; 
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LostItems() {
    const [lostitems, setLostItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/lostitems')
            .then(response => setLostItems(response.data))
            .catch(error => console.log(error));
    }, []);

    const deleteItem = (id, name) => {
        if (window.confirm(`Are you sure you want to delete the item ${name}?`)) {
            fetch("http://localhost:3001/deleteitem", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    itemid: id,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    alert(data.data);
                });
        } else {
            // Code to handle cancellation if user cancels
        }
    };

    return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center gradient-background">
            <div className="w-50">
                <h2>Lost Items List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Brand</th>
                            <th>Location</th>
                            <th>Lost Date</th>
                            <th>Description</th>
                            <th>Contact</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lostitems.map(lostitem => (
                            <tr key={lostitem._id}>
                                <td>{lostitem.itemName}</td>
                                <td>{lostitem.brand}</td>
                                <td>{lostitem.location}</td>
                                <td>{lostitem.lostDate}</td>
                                <td>{lostitem.description}</td>
                                <td>{lostitem.contact}</td>
                                <td>
                                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(lostitem._id, lostitem.itemName)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ marginBottom: '30px', marginTop: '30px' }}>
    <Link to="/lostform" className="btn btn-default border w-100 bg-warning-subtle rounded-0 text-decoration-none">
        Report lost item
    </Link>
</div>

<div style={{ marginTop: '30px' }}>
    <Link to="/foundform" className="btn btn-default border w-100 bg-warning-subtle rounded-0 text-decoration-none">
        Found an item? Delete and Report.
    </Link>
</div>


                
            </div>
        </div>
    );
}

export default LostItems;
