import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainRoom = () => {
    const [error , setError] = useState("");
    const [data , setData] = useState({name:"" , room:"" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setData({...data , [e.target.name]: e.target.value});
    }

    const validation = () => {
        if(!data.name){
            setError("Please Enter Your name");
            return false
        }
        if(!data.room){
            setError("Please Select room");
            return true
        }
        setError("");
        return true
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if(isValid){
            navigate(`/chat/${data.room}` , {state:data});
        }
    }


  return (
    <div className='px-3 py-4 shadow text-dark border rounded row' style={{backgroundColor:'#BDB76B'}}>
        <form onSubmit={handleSubmit}>
            <div className='form-group mb-4'>
                <h2 className='text-light mb-4'>Welcome to Chatclub</h2>
            </div>
            <div className='form-group mb-4'>
                <input type='text' className='form-control bg-light' name='name'  onChange={handleChange} placeholder='Enter Your Name' />
            </div>
            <div className='form-group mb-4'>
                <select className='form-select bg-light' name='room' onChange={handleChange}>
                    <option value=""> Selct Rooom </option>
                    <option value="gaming"> Gaming </option>
                    <option value="coding"> Coding </option>
                    <option value="socialMedia"> Social Media </option>
                </select>
            </div>
            <button type='submit' style={{color: 'red' , backgroundColor:'#ADFF2F'}} className='btn btn-warning w-100 mb-2' >Submit</button>
            {error ? <small className='text-danger'>{error}</small> : ""}
        </form>
    </div>
  )
}
export default MainRoom;