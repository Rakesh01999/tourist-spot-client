

import { useLoaderData } from "react-router-dom";
import SpotCard from "../SpotCard/SpotCard";
import { useState } from "react";

const AllSpot = () => {

    const spots  = useLoaderData();
    // const [spots, setSpots] = useState(loadedSpots);


    return (
        <div>
            <h2 className="text-2xl text-center text-lime-600 font-bold my-3">All Tourists Spot</h2>
            <h2 className="text-2xl text-center text-lime-600 font-bold my-3">All  Spot: {spots.length}</h2>

            


            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10'>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"> */}
                <div className="mx-auto grid grid-cols-1 gap-4">
                    {spots.map((spot) => (
                        <SpotCard key={spot._id} spot={spot}></SpotCard>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default AllSpot;
