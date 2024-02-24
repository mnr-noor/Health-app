'use client'
    import React, { useEffect } from 'react';

    const AddPatient = () => {
    useEffect(() => {
        // Your useEffect logic here
        console.log('Component mounted!');
        // Cleanup logic if needed
        return () => {
        console.log('Component unmounted!');
        };
    }, []); // Empty dependency array for componentDidMount and componentWillUnmount behavior

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for handling form submission here
        // For example, you can use state or send the data to an API
    };

    return (
        <div className='flex justify-center items-center h-screen bg-[#dce7fd]'>
        <form onSubmit={handleSubmit} className='w-full max-w-md p-4 bg-white rounded-lg shadow-md'>
        <label htmlFor="input-label" className="block text-[#0f0e10] text-sm font-medium mb-2  ">
            Patient name
        </label>
        <input
            type="text"
            id="input-label"
            className="py-3 px-4 block w-full border-1334630 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="write your username here"
            required
        />

<label htmlFor="input-label" className="block text-[#0f0e10] text-sm font-medium mb-2  ">
            Last measurement
        </label>
        <input
            type="text"
            id="input-label"
            className="py-3 px-4 block w-full border-1334630 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="write your username here"
            required
        />

<label htmlFor="input-label" className="block text-[#0f0e10] text-sm font-medium mb-2  ">
            Last visit
        </label>
        <input
            type="text"
            id="input-label"
            className="py-3 px-4 block w-full border-1334630 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="write your username here"
            required
        />


<label htmlFor="input-label" className="block text-[#0f0e10] text-sm font-medium mb-2  ">
            Contact
        </label>
        <input
            type="text"
            id="input-label"
            className="py-3 px-4 block w-full border-1334630 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="write your username here"
            required
        />

    
        

        <button type="submit" className="py-3 px-4 mt-4 bg-[#6e85cf] text-white rounded-md hover:bg-blue-600">
            Add
        </button>
        </form>
        </div>
    );
    };

    export default AddPatient;
