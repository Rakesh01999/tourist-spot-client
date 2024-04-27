import React from 'react';
import { BiSolidArea } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaLocationDot } from 'react-icons/fa6';
import { GrStatusCriticalSmall } from 'react-icons/gr';
import { IoPeople, IoPricetags } from 'react-icons/io5';
import { MdOutlineFindInPage } from 'react-icons/md';
import { FaMap } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaCarSide } from "react-icons/fa";

const SpotCard = ({ spot }) => {

    const { spotName, photo, shortDescription, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, name, email } = spot;

    return (
        <div>
            {/* <div className="shadow-xl md:h-[278px] flex gap-6 p-6 mt-4"> */}
            {/* <div className="shadow-xl md:flex md:h-[278px] flex-col md:flex-row gap-6 p-6 mt-4"> */}
            {/* <div className='shadow-xl max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10 gap-6'> */}

            <div className='bg-lime-200 shadow-xl w-full lg:max-w-[1540px] px-4 md:px-8 py-8 md:py-12 rounded-3xl flex flex-col md:flex-row items-center mb-10 gap-6 md:text-xl mx-auto'>

                <div className='w-[150px] h-[200px]'>
                    <img src={photo} alt="Book" />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[24px] font-bold">{spotName}</h2>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex items-center gap-4'>

                            <p> {shortDescription}</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        {/* <CiLocationOn className='text-[30px]' /> */}
                        <FaMap className='text-[30px]' />
                        <span>Country : {countryName}</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className='flex gap-4'>
                            <p className='text-[16px] font-bold'> </p>
                            {/* <p className='bg-[#23BE0A0D] text-[#23BE0A] text-[16px]'>{book.tags[0]}</p>
                            <p className='bg-[#23BE0A0D] text-[#23BE0A] text-[16px]'>{book.tags[1]}</p> */}
                        </div>
                        <div className='flex items-center gap-3'>
                            <CiLocationOn className='text-[24px] ' />
                            <p className='text-[16px] font-semibold'> <span className='font-bold'>  Location: </span> {location}</p>
                        </div>

                    </div>

                    <div className='flex items-center gap-4'>
                        <IoPeople />
                        <p>Total Visitors Per Year:  {totalVisitorsPerYear} people</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <FaCarSide></FaCarSide>
                        <p>Travel-Time : {travelTime}</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <p className='bg-[#328EFF26] rounded-2xl text-[#328EFF] text-[16px] w-[200px] p-3'>Suitable Season: {seasonality}</p>
                        <p className='bg-[#FFAC3326] rounded-2xl text-red-500 text-[16px] w-[174px] p-3'> Average cost: {averageCost}</p>
                        <Link to={`/viewDetails/${spot._id}`}>
                            <button className='btn w-[150px] h-[] bg-[#23BE0A] rounded-3xl text-white text-[18px]'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SpotCard;