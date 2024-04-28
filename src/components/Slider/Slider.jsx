import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s1 from '../../../public/images/1.jpg'
import s2 from '../../../public/images/2.jpg'
import s3 from '../../../public/images/3.jpg'
import s4 from '../../../public/images/4.jpg'
import s5 from '../../../public/images/5.jpg'
import s6 from '../../../public/images/6.jpg'
import s7 from '../../../public/images/7.jpg'
import s8 from '../../../public/images/8.jpg'
import s9 from '../../../public/images/9.jpg'
import s10 from '../../../public/images/10.jpg'


const Slider = () => {

    return (
        <div>

            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><span><img src={s1} alt="" /></span></SwiperSlide>
                <SwiperSlide><span><img src={s2} alt="" /></span></SwiperSlide>
                <SwiperSlide><span><img src={s3} alt="" /></span></SwiperSlide>
                <SwiperSlide><span><img src={s4} alt="" /></span></SwiperSlide>
                <SwiperSlide><span><img src={s5} alt="" /></span></SwiperSlide>
                <SwiperSlide><span><img src={s6} alt="" /></span></SwiperSlide>
                <SwiperSlide><span><img src={s7} alt="" /></span></SwiperSlide>
                <SwiperSlide><span><img src={s9} alt="" /></span></SwiperSlide>
                <SwiperSlide><span><img src={s10} alt="" /></span></SwiperSlide>
                ...
            </Swiper> */}

            {/* <div className='carousel max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-10  rounded-3xl mb-10'> */}
            <div className="carousel mx-auto">

                {/* <div id="slide1" className="carousel-item relative w-full bg-no-repeat" style={{ backgroundImage: 'url(https://i.postimg.cc/LsNn07qd/iqx-azmi-894-I5hk0-Xkc-unsplash.jpg)' }}>
                    <img src={s1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> */}

                {/* ----------- csl ------------- */}
                {/* <div id="slide1" className='carousel-item relative hero w-[210px] max-w-[0px] mx-auto  rounded-3xl mb-10  bg-no-repeat' style={{ backgroundImage: 'url(https://i.postimg.cc/fRbP4SyV/iraj-ishtiak-4hx4-Tlg8ii-I-unsplash.jpg)' }}>
                    <div className='hero-overlay bg-transparent rounded-3xl flex flex-col md:flex-row items-end '>
                        <div className='rounded-3xl w-full md:w-[70%] pt-10'>
                            <div className='text-[16px] md:text-2xl font-thin text-lime-500 lg:text-3xl '>
                                <h1 class="font-bold md:m-10">
                                    Offers breathtaking views of hills, lakes, and tribal villages.
                                </h1>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide6" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                                <a href="#slide2" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className='carousel-item relative hero max-w-[370px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl mb-10  bg-no-repeat' style={{ backgroundImage: 'url(https://i.postimg.cc/zGLppMqV/mario-la-pergola-KTHA8-H-qp-Ow-unsplash.jpg)' }}>
                    <div className='hero-overlay bg-transparent rounded-3xl flex flex-col md:flex-row items-end '>
                        <div className='rounded-3xl w-full md:w-[70%] pt-10'>
                            <div className='text-[16px] md:text-2xl font-thin text-lime-500 lg:text-3xl '>
                                <h1 class="font-bold md:m-10">
                                    Offers breathtaking views of hills, lakes, and tribal villages.
                                </h1>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                                <a href="#slide3" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide3" className='carousel-item relative hero max-w-[370px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl mb-10  bg-no-repeat' style={{ backgroundImage: 'url(https://i.postimg.cc/fRbP4SyV/iraj-ishtiak-4hx4-Tlg8ii-I-unsplash.jpg)' }}>
                    <div className='hero-overlay bg-transparent rounded-3xl flex flex-col md:flex-row items-end '>
                        <div className='rounded-3xl w-full md:w-[70%] pt-10'>
                            <div className='text-[16px] md:text-2xl font-thin text-lime-500 lg:text-3xl '>
                                <h1 class="font-bold md:m-10">
                                    Offers breathtaking views of hills, lakes, and tribal villages.
                                </h1>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                                <a href="#slide4" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide4" className='carousel-item relative hero max-w-[370px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl mb-10  bg-no-repeat' style={{ backgroundImage: 'url(https://i.postimg.cc/fRbP4SyV/iraj-ishtiak-4hx4-Tlg8ii-I-unsplash.jpg)' }}>
                    <div className='hero-overlay bg-transparent rounded-3xl flex flex-col md:flex-row items-end '>
                        <div className='rounded-3xl w-full md:w-[70%] pt-10'>
                            <div className='text-[16px] md:text-2xl font-thin text-lime-500 lg:text-3xl '>
                                <h1 class="font-bold md:m-10">
                                    Offers breathtaking views of hills, lakes, and tribal villages.
                                </h1>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                                <a href="#slide5" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide5" className='carousel-item relative hero max-w-[370px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl mb-10  bg-no-repeat' style={{ backgroundImage: 'url(https://i.postimg.cc/fRbP4SyV/iraj-ishtiak-4hx4-Tlg8ii-I-unsplash.jpg)' }}>
                    <div className='hero-overlay bg-transparent rounded-3xl flex flex-col md:flex-row items-end '>
                        <div className='rounded-3xl w-full md:w-[70%] pt-10'>
                            <div className='text-[16px] md:text-2xl font-thin text-lime-500 lg:text-3xl '>
                                <h1 class="font-bold md:m-10">
                                    Offers breathtaking views of hills, lakes, and tribal villages.
                                </h1>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                                <a href="#slide6" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide6" className='carousel-item relative hero max-w-[370px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl mb-10  bg-no-repeat' style={{ backgroundImage: 'url(https://i.postimg.cc/fRbP4SyV/iraj-ishtiak-4hx4-Tlg8ii-I-unsplash.jpg)' }}>
                    <div className='hero-overlay bg-transparent rounded-3xl flex flex-col md:flex-row items-end '>
                        <div className='rounded-3xl w-full md:w-[70%] pt-10'>
                            <div className='text-[16px] md:text-2xl font-thin text-lime-500 lg:text-3xl '>
                                <h1 class="font-bold md:m-10">
                                    Offers breathtaking views of hills, lakes, and tribal villages.
                                </h1>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                                <a href="#slide1" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div id="slide1" className="carousel-item relative w-full bg-no-repeat" >
                    <div className="w-full h-full flex flex-col justify-end">
                        <img src="https://i.postimg.cc/fRbP4SyV/iraj-ishtiak-4hx4-Tlg8ii-I-unsplash.jpg" className="w-full" />
                        <div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-5 right-5 bottom-5">
                            <h1 className="text-orange-400 md:font-bold text-lg md:text-4xl">
                                Bandarban , Bangladesh
                            </h1>
                            <p className="text-orange-500 md:font-bold text-lg md:text-4xl">
                                Offers breathtaking views of hills, lakes, and tribal villages.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                        <a href="#slide2" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full bg-no-repeat">
                    <div className="w-full h-full flex flex-col justify-end">
                        <img src="https://i.postimg.cc/zGLppMqV/mario-la-pergola-KTHA8-H-qp-Ow-unsplash.jpg" className="w-full" />
                        <div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-5 right-5 bottom-5">
                            <h1 className="text-lime-200 text-lg md:text-4xl">
                                Bangkok, Thailand
                            </h1>
                            <p className="text-lime-200 text-lg md:text-4xl">
                                Famous for its ancient temples, lush mountains, and traditional Thai culture.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                        <a href="#slide3" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full bg-no-repeat" >
                    <div className="w-full h-full flex flex-col justify-end">
                        <img src="https://i.postimg.cc/05MdhNjZ/m-o-e-Joxep-WVTr-NE-unsplash.jpg" className="w-full" />
                        <div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-5 right-5 bottom-5">
                            <h1 className="text-red-700 md:font-bold text-lg md:text-4xl">
                                Bali, Indonesia
                            </h1>
                            <p className="text-red-700 md:font-bold text-lg md:text-4xl">
                                Famous for its beautiful beaches, lush landscapes, and vibrant culture.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                        <a href="#slide4" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full bg-no-repeat" >
                    <div className="w-full h-full flex flex-col justify-end">
                        <img src="https://i.postimg.cc/nrpFKzPZ/niklas-weiss-2-Wl-TWZLn-Rc-unsplash.jpg" className="w-full" />
                        <div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-5 right-5 bottom-5">
                            <h1 className="text-lime-200 text-lg md:text-4xl">
                                Cameron Highlands, Malaysia
                            </h1>
                            <p className="text-lime-200 text-lg md:text-4xl">
                                Famous for its cool climate, tea plantations, and scenic hiking trails.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                        <a href="#slide5" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                    </div>
                </div>

                <div id="slide5" className="carousel-item relative w-full bg-no-repeat" >
                    <div className="w-full h-full flex flex-col justify-end">
                        <img src="https://i.postimg.cc/02tkm9dR/sutirta-budiman-Dxm-BSg-UYKis-unsplash.jpg" className="w-full" />
                        <div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-5 right-5 bottom-5">
                            <h1 className="text-orange-500 md:font-bold text-lg md:text-4xl">
                                Ha Long Bay, Vietnam
                            </h1>
                            <p flex-col className="text-orange-500 md:font-bold text-lg md:text-4xl">
                                UNESCO World Heritage site known for its emerald waters, towering limestone islands, and scenic cruises.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                        <a href="#slide6" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                    </div>
                </div>

                <div id="slide6" className="carousel-item relative w-full bg-no-repeat" >
                    <div className="w-full h-full flex flex-col justify-end">
                        <img src="https://i.postimg.cc/bryPD5Zw/bradley-prentice-d-YER-zr-GCm-I-unsplash.jpg" className="w-full" />
                        <div className="absolute flex flex-col  justify-between transform -translate-y-1/2 left-5 right-5 bottom-5">
                            <h1 className="text-lime-200 md:font-bold text-lg md:text-4xl">
                                Kep ,Cambodia
                            </h1>
                            <p className="text-lime-200 text-lg md:text-4xl">
                                Coastal town famous for its crab market, pepper plantations, and relaxed atmosphere.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❮</a>
                        <a href="#slide1" className="btn btn-sm md:btn-square lg:btn-square lg:w-16 lg:h-24  bg-lime-700">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;