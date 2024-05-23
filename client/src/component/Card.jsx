import React from "react"
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
    return (
        <React.Fragment>
            <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden m-4">
                <img className="w-full h-120 object-cover" src={recipe?.image} alt={recipe?.name} />
                <div className="p-4 h-max mb-10">
                    <div className="h-36">
                        <h2 className="text-2xl font-semibold mb-2">{recipe?.name}</h2>
                        <p className="text-gray-600 mb-4">{recipe?.description}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Card