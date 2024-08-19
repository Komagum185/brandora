    import React from 'react'

    const Cards = () => {
    return (
    <div className='mx-auto flex justify-between items-center gap-8 py-16 m-8'>
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
        <div className="md:flex-shrink-0">
            <div className="p-8">
            <h2 className="text-lg font-bold text-gray-900">Powering innovation at 200,000+ companies worldwide</h2>
            <p className="mt-2 text-gray-500">
            Empower Developers, IT Ops, and business teams to collaborate at high velocity. 
            Respond to changes and deliver great customer and employee service experiences fast.
            </p>
            </div>
        </div>
        </div>
    </div>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
        <div className="md:flex-shrink-0">
            <div className="p-8">
            <p className="mt-2 text-gray-600">
            Track work across the enterprise through an open, collaborative platform. 
            Link issues across Jira and ingest data from other software development tools, 
            so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
            Deliver great service experiences fast - without the complexity of 
            traditional ITSM solutions.Accelerate critical development work, eliminate toil, 
            and deploy changes with ease, with a complete audit trail for every change.
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
    )
    }

    export default Cards