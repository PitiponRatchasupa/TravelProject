// src/App.js

import React from 'react';
import Card from './Card';

function List({ listTravel }) {
    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <div className="grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-6">
                {listTravel.length > 0 ? listTravel.map(data => (
                    <Card key={data.id} recipe={data} />
                )) :
                    (
                        <div className="col-span-full min-w-max text-center text-gray-500 text-xl mt-8">
                            No recipes found.
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default List;
