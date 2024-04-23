import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import Link if using React Router DOM
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'; // Import React and useState hook



function FoundForm() {
    const [itemName,setItemName]= useState()
    const [brand,setBrand]= useState()
    const [location, setLocation]=useState()
    const [foundDate,setFoundDate]= useState()
    const[contact,setContact]=useState()

    const navigate=useNavigate()

    const handleSubmit =(e) =>
    {
        e.preventDefault()
        axios.post('http://localhost:3001/foundform',{itemName,brand,location,foundDate,contact})
        .then(result => {console.log(result)
        navigate('/founditems')
        
        })
        .catch(err=> console.log(err))
    }

  

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Found Form</h2>
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
                            <strong>Location (found)</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter found location"
                            autoComplete="off"
                            name="Location" // Corrected name attribute
                            className="form-control rounded-0"
                            onChange={(e)=> setLocation(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Found Date</strong>
                        </label>
                        <input
                            type="date"
                            placeholder="Enter found date"
                            autoComplete="off"
                            name="Found Date" // Corrected name attribute
                            className="form-control rounded-0"
                            onChange={(e)=> setFoundDate(e.target.value)}
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

export default FoundForm;
