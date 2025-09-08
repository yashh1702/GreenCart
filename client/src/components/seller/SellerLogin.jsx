import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const SellerLogin = () => {

const {isSeller, setIsSeller, navigate} = useAppContext()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSeller(true);
}

useEffect(()=>{
    if(isSeller){
        navigate("/seller")
    }
},[isSeller])

  return !isSeller && (
    <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600'>
    
    <div  className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl
     border border-gray-300 ">
    <p className='text-2xl font-medium m-auto'><span className='text-primary'>Seller</span>Login</p>
    
    <div className='w-full'>
    <p>Email</p>
    <input
     onChange={(e) => setEmail(e.target.value)} value={email}
     type='email' placeholder='Enter your Email'
     className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary required'   
    />    
    </div> 
    
    <div className='w-full'>
    <p>Password</p>
    <input
     onChange={(e) => setPassword(e.target.value)} value={password}
     type='password' placeholder='Enter your Password'
     className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary required'/>    
    </div> 
    <button className='bg-primary text-white w-full py-2 rounded-md cursor-pointer'>Login</button>

    </div>
    </form>
  )
}

export default SellerLogin