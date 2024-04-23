import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link if using React Router DOM
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './lostitems.css'; 
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function FoundItems()
{
    const [founditems, setFoundItems]=useState([])
   useEffect(()=>{
    axios.get('http://localhost:3001/founditems')
    .then(founditems => setFoundItems(founditems.data))
    .catch(err=> console.log(err))

   }, [])

   const deleteFoundItem = (id, name) => {
    if (window.confirm(`Are you sure you want to delete the item ${name}?`)) {
        fetch("http://localhost:3001/deletefounditem",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                itemId: id,
                }),
        })
        .then((res)=> res.json())
        .then((data)=>{
            alert(data.data);
        });
    } else {
        // Code to handle cancellation if user cancels
    }
};

   return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center gradient-background">
        <div className= "w-50 ">
        <h2>Found Items List</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Brand</th>
                    <th>Location</th>
                    <th>Found Date</th>
                    <th>Contact</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    founditems.map(founditem=> {
                        return <tr key={founditem._id}> 
                            <td>{founditem.itemName}</td>
                            <td>{founditem.brand}</td>
                            <td>{founditem.location}</td>
                            <td>{founditem.foundDate}</td>
                            <td>{founditem.contact}</td>
                            <td>
                            <FontAwesomeIcon icon={faTrash} onClick={()=>deleteFoundItem(founditem._id, founditem.itemName)}/>
                            </td>

                        </tr>
                    })
                }
            </tbody>
        </table>
        <Link to="/foundform" className="btn btn-default border w-100 bg-warning-subtle rounded-0 text-decoration-none">
            Report Found
        </Link>
        </div>
       
    </div>
   )
}

export default FoundItems;