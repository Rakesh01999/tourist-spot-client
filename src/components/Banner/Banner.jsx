import React from 'react';
import { Link } from 'react-router-dom';
import banner5 from '../../../public/images/bnp5.png'

import Slider from '../Slider/Slider';
import { FaAnglesRight } from "react-icons/fa6";
import 'animate.css';


const Banner = () => {

    return (
        <div>
            <div className='hero max-w-[370px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl  mb-10 bg-no-repeat' style={{ backgroundImage: 'url(https://i.postimg.cc/5NBfwD43/e-mens-SBe-SUc7-X00o-unsplash.jpg)' }}>

                <div className='hero-overlay bg-opacity-70 rounded-3xl flex flex-col md:flex-row items-center px-4 md:px-8 py-8 md:py-2'>
                    <div className='rounded-3xl w-full md:w-[50%]'>

                        {/* <div className='text-xl md:text-3xl lg:text-3xl font-bold'> */}
                        <div className='text-[10px] md:text-3xl lg:text-3xl text-white font-bold'>
                            <h1 class="animate__animated animate__fadeInLeft">
                                Find a <span className='text-violet-300'>perfect property</span> Where you'll love <span className='text-violet-300'>to live</span>
                            </h1>
                        </div>
                    </div>

                    <div className=' md:rounded-full mt-4 md:w-[50%] md:ml-[50px] lg:ml-32'>
                        <h1 class="animate__animated animate__zoomIn">
                            <img className='w-[250px] h-auto md:w-[400px] lg:w-full' src={banner5} alt="home" />
                        </h1>
                    </div>
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
