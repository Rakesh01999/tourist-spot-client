import React from 'react';
import { FaCarSide, FaMap } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoPricetags } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FcViewDetails } from "react-icons/fc";
import { MdDescription } from "react-icons/md";
import { FaFlag } from "react-icons/fa";

const Country = ({ country }) => {

    const { photo, shortDescription, countryName } = country;

    return (
        <div>


            <Link to={`/countrySpots/${country._id}`}>
                <div className="hover:shadow-2xl hover:rounded-3xl hover:bg-orange-300 text-center mb-2">
                    {/* <button className="btn btn-outline btn-info md:w-[200px] rounded-full md:text-lg text-white mb-4"> */}
                    <button className="">
                        {/* View Details */}
                        <div className="max-w-full md:h-[600px]  rounded-3xl shadow-2xl flex flex-col items-center mb-10">
                            <figure className="md:px-10 mt-10">
                                <img src={photo} alt="house" className="  rounded-xl" />
                            </figure>
                            <div className="card-body hover:text-green-600">
                                {/* <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{spotName}</h2> */}
                                <div className="flex gap-2 items-center text-xl text-green-800 md:text-2xl">
                                    {/* <IoPricetags className="text-green-200" /> */}
                                    <FaFlag className="text-center" />
                                    <p className='text-center'>{countryName}</p>
                                </div>
                                <div className="border-b-2 my-4"></div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-2 items-center text-lg md:text-xl">
                                        <MdDescription className='text-[80px]' />
                                        <p>{shortDescription}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <Link to={`/viewDetails/${spot._id}`}> */}

                        </div>
                    </button>
                </div>
            </Link>


        </div>
    );
};

export default Country;