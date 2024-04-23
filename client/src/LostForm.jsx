import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import Link if using React Router DOM
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'; // Import React and useState hook



function LostForm() {
    const [itemName,setItemName]= useState()
    const [brand,setBrand]= useState()
    const [location, setLocation]=useState()
    const [lostDate,setLostDate]= useState()
    const [description,setDescription] =useState()
    const[contact,setContact]=useState()

    const navigate=useNavigate()

    const handleSubmit =(e) =>
    {
        e.preventDefault()
        axios.post('http://localhost:3001/lostform',{itemName,brand,location,lostDate,description,contact})
        .then(result => {console.log(result)
        navigate('/lostitems')
        
        })
        .catch(err=> console.log(err))
    }

  

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Lost Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Item Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Item Name"
                            autoComplete="off"
                            name="Itemname" // Corrected name attribute
                            className="form-control rounded-0"
                            onChange={(e)=> setItemName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Brand</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Brand"
                            autoComplete="off"
                            name="Brand" // Corrected name attribute
                            className="form-control rounded-0"
                            onChange={(e)=> setBrand(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Location (last seen)</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter last seen location"
                            autoComplete="off"
                            name="Location" // Corrected name attribute
                            className="form-control rounded-0"
                            onChange={(e)=> setLocation(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Lost Date</strong>
                        </label>
                        <input
                            type="date"
                            placeholder="Enter lost date"
                            autoComplete="off"
                            name="Lost Date" // Corrected name attribute
                            className="form-control rounded-0"
                            onChange={(e)=> setLostDate(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Description</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter short description"
                            autoComplete="off"
                            name="Description" // Corrected name attribute
                            className="form-control rounded-0"
                            onChange={(e)=> setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Contact Info</strong>
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter contact number"
                            autoComplete="off"
                            name="Contact" // Corrected name attribute
                            className="form-control rounded-0"
                            onChange={(e)=> setContact(e.target.value)}
                        />
                    </div>
                    
                    
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Submit
                    </button>

                    
                </form>
            </div>
        </div>
    );
}

export default LostForm;
