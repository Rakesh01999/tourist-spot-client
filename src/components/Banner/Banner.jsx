import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../public/images/banner.png'
import Slider from '../Slider/Slider';
import { FaAnglesRight } from "react-icons/fa6";
import 'animate.css';


const Banner = () => {

    return (
        <div>
            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12 bg-violet-100 rounded-3xl flex flex-col md:flex-row items-center mb-10'>

                <div className='w-full md:w-[50%]'>
                    {/* <div className='text-xl md:text-3xl lg:text-3xl font-bold'> */}
                    <div className='text-[10px] md:text-3xl lg:text-3xl font-bold'>
                        <h1 class="animate__animated animate__fadeInLeft">
                            Find a <span className='text-violet-600'>perfect property</span> Where you'll love <span className='text-violet-600'>to live</span>
                        </h1>
                    </div>
                </div>

                {/* <div className='mt-4  md:w-[50%] md:ml-[50px] lg:ml-32'>
                    <h1 class="animate__animated animate__zoomIn">
                        <img className='w-full h-[180px] md:w-[400px] md:h-[300px]' src={banner} alt="home" />
                    </h1>
                </div> */}

                <div className='mt-4 md:w-[50%] md:ml-[50px] lg:ml-32'>
                    <h1 class="animate__animated animate__zoomIn">
                        {/* <img className='w-full h-auto md:w-[400px] lg:w-full' src={banner} alt="home" /> */}
                        <img className='w-[250px] h-auto md:w-[400px] lg:w-full' src={banner} alt="home" />
                    </h1>
                </div>


            </div>

            {/* Slider */}
            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-10 bg-violet-200 rounded-3xl mb-10'>
                <div className='text-[] md:text-3xl md:font-bold text-center text-blue-600 mb-4 flex flex-row items-center justify-center gap-2'>
                    <h3 className='text-center'>
                        Swipe Your Dream Places
                    </h3>
                    <div>
                        <FaAnglesRight />
                    </div>
                </div>
                <Slider />
            </div>
        </div>
    );
};

export default Banner;
