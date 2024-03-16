import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Edit() {
    const {id} = useParams();
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3000/users')
    })
    return (
        <div>
            <div className='d-flex w-100 vh-100 justify-center items-center'>
            <div className='w-50 border  p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' className='form-control'
                        onChange={e=>setInputData({...inputData, name:e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name='email' className='form-control'
                        onChange={e=>setInputData({...inputData, email:e.target.value})}/>
                    </div> <br />
                    <button className='btn'>Submit</button>
                </form>
            </div>
        </div>
        </div>
    )   
}
export default Edit;
