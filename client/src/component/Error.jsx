import React from "react"
import { Link } from "react-router-dom"

const Error = ({ message = "PAGE NOT FOUND" }) => {
    return (
        <React.Fragment>
            <div className='min-h-screen flex flex-col justify-center items-center text-9xl font-medium'>
                {message}
                <Link to="/" className="text-blue-500 text-2xl mt-10 border-4 p-4 border-blue-500 rounded-md hover:bg-blue-50">Back to recipes</Link>
            </div>
        </React.Fragment>
    )
}

export default Error