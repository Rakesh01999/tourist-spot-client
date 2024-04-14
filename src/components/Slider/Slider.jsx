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
            <Swiper
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
                {/* <SwiperSlide><span><img src={s8} alt="" /></span></SwiperSlide> */}
                <SwiperSlide><span><img src={s9} alt="" /></span></SwiperSlide>
                <SwiperSlide><span><img src={s10} alt="" /></span></SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default Slider;