import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Add() {
    const [inputData, setInputData] = useState({
        name: '',
        email: ''
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users', inputData)
        .then(res=>{
            alert("Data Posted Succesfully!")
            navigate('/');
        }).catch(err=>console.log(err))
    }
    return (
        <div className='d-flex w-100 vh-100 justify-center items-center'>
            <div className='w-50 border  p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' className='form-control border-2'
                        onChange={e=>setInputData({...inputData, name:e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name='email' className='form-control border-2'
                        onChange={e=>setInputData({...inputData, email:e.target.value})}/>
                    </div> <br />
                    <button className='btn bg-green-700 p-2 border-r-2'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Add;