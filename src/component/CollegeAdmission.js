import React from 'react'
import { useState } from 'react';
import '../style/CollegeAdmission.css'

export default function CollegeAdmission() {

    const [formData,setFormData] =useState({
        name:"",
        dob:"",
        email:"",
        phoneNo:"",
        alternatePhno:"",
        adress:"",
        yop:"",
        program:"",
        sslcMark:"",
        higherSecondaryMark:"",
        sslcPercentage:"",    
        hscPercentage:"",  
});
const [isSubmitted, setIsSubmitted] = useState(false);

const handleChange = (e)=>
{
    const {name,value}=e.target;
    setFormData((prevData)=>({
        ...prevData,
        [name]:value,
    }));
};
const handleSubmit =(e)=>
{
    e.preventDefault();
    console.log("form submitted successfully");
    setIsSubmitted(true); 
}
  return (
    <div>
        <h2>College Admission Form </h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text'
                name='name'
                value={formData.name}
                onChange={handleChange} required/>
            </label>
            <br/>
            <label>
                Date Of Birth:
                <input type='date'
                name='dob'
                value={formData.dob}
                onChange={handleChange} required/>
            </label>
            <br/>
            <label>
                Email:
                <input type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required/>
            </label>
            <br/>
            <label>
                PhoneNo:
                <input type='tel'
                name='phoneNo'
                value={formData.phoneNo}
                onChange={handleChange}
                required/>
            </label>
            <br/>
            <label>
                Altername phone Number:
                <input type='tel'
                name='alternatePhno'
                value={formData.alternatePhno}
                onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Address:
                <input type='address'
                name='address'
                value={formData.address}
                onChange={handleChange}
                required/>
            </label>
            <br/>
            <label>
                Year of passedOut:
                <input type='number'
                name='yop'
                value={formData.yop}
                onChange={handleChange}
                required/>
            </label>
            <br/>
            <label>
                Program:
                <select name='program'
                value={formData.program}
                onChange={handleChange}
                required>
                    <option value="">choose</option>
                    <option value="science">Science</option>
                    <option value="arts">Arts</option>
                    <option value="engineering">Engineering</option>
                    <option value="commerece">Commerce</option>
                    <option value="data science"> Data Science</option>
                </select>
            </label>
            <br/>
            <label>
                SSLC Mark:
                <input type='number'
                name='sslcMark'
                value={formData.sslcMark}
                onChange={handleChange}
                required/>
            </label>
            <br/>
            <label>
                HigherSecondaryMark:
                <input type='number'
                name="higherSecondaryMark"
                value={formData.higherSecondaryMark}
                onChange={handleChange}
                required/>
            </label>
            <br/>
            <label>
                SSLC Percentage:
                <input type='number'
                name='sslcPercentage'
                value={formData.sslcPercentage}
                onChange={handleChange}
                required/>
            </label>
            <br/>
            <label>
                HSC Percentage:
                <input type='number'
                name='hscPercentage'
                value={formData.hscPercentage}
                onChange={handleChange}
                required/>
            </label>
            <br/>
            <button type='submit' >Submit</button>

        </form>
        {isSubmitted && <p style={{ color: "green" }}><b>Form submitted successfully!</b></p>}
    </div>
  )
}


