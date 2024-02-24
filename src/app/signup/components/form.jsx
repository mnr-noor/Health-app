'use client'
    import React, { useEffect, useState } from 'react';
    import {signUpNewUser} from "../actions/signup"





    
    const SigninForm = () => {
        const [FormData,setFormData]=useState({
            userName:"",
            email:"",
            password:""
            })
            const [isSingup,setSingup]=useState(false)
            
            async function handleSignUp(e){
                e.preventDefault();
                signUpNewUser(FormData)
                
            }
            
            
            
            
            function handleSubmit(e){
            setFormData((prev)=>{
                return {...prev , 
                    [e.target.name]:e.target.value
                }
            })
        }

    return (
        <div className='flex justify-center items-center h-screen bg-[#dce7fd]'>
        <form onSubmit={handleSubmit} className='w-full max-w-md p-4 bg-white rounded-lg shadow-md'>
        <label htmlFor="input-label" className="block text-[#0f0e10] text-sm font-medium mb-2  ">
            Username
        </label>
        <input
            type="text"
            id="input-label"
            className="py-3 px-4 block w-full border-1334630 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="write your username here"
            required
        />

        <label htmlFor="input-label" className="block text-[#0f0e10] text-sm font-medium mb-2 mt-5 ">
            Email
            </label>
            <input
            type="email"
            id="input-label"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Write your email here"
            required
        />



            <label htmlFor="input-label" className="block text-[#0f0e10] text-sm font-medium mb-2 mt-5 ">
            Password
            </label>
            <input
            type="Password"
            id="input-label"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="your password"
            required
        />

    
        <button type="submit" className="py-3 px-4 mt-4 bg-[#0e35b7] text-white rounded-md hover:bg-blue-600">
            Submit
        </button>
        </form>
        </div>
    );
    };

    export default SigninForm;
