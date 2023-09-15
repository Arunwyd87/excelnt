
import React, { useState } from 'react'

const Login = () => {
    const [isSignIn,setisSignIn] = useState(true);
    const registerhandler =()=>{
        setisSignIn(!isSignIn)

    }
   const onSubmit =(e) => { e.preventDefault() }
  return (
<div className='relative'>
    
        <form className=' absolute md:w-3/12 w-full mx-auto  rounded-lg bg-opacity-80 p-12 bg-green-500 my-36 right-0 left-0'>
        {!isSignIn && <input type='text' placeholder='Name' className='w-full rounded bg-white p-3'/>}
            <input type='text' placeholder='Email id' className='w-full rounded bg-white p-3  mt-3'/>
            <input type='password' placeholder='password' className='w-full rounded bg-white p-3 mt-6' />
            <button onClick={onSubmit} className='p-4 my-6 bg-slate-700 w-full rounded-lg'>{isSignIn?'Sign In' :'Sign Up'}</button>
           {isSignIn ? <p>if you are a new user <a className='text-blue-700 cursor-pointer' onClick={registerhandler}>Register</a> first to continue</p>
           :<p>if you are an existing user <a className='text-blue-700 cursor-pointer' onClick={registerhandler}>Sign In</a> </p>} 
        </form>
    
</div>
  )
}

export default Login