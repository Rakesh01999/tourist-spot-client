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
                <div id="slide1" className="carousel-item relative w-full">
                    {/* <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" /> */}
                    <img src={s1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={s2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={s3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={s4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;