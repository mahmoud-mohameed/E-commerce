import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'
import slider1 from '../image/Swiper/1.avif'
import slider2 from '../image/Swiper/2.avif'
import slider3 from '../image/Swiper/3.avif'
import slider4 from '../image/Swiper/4.avif'
import slider5 from '../image/Swiper/5.avif'
import slider6 from '../image/Swiper/6.avif'
import slider7 from '../image/Swiper/7.avif'
import slider8 from '../image/Swiper/8.avif'
const Swiperr = () => { 
    return(
        <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
      className="mySwiper">
        <SwiperSlide>
          <Link><img src={slider1} alt='slider1' width="100%" height="100%"/></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link><img src={slider2} alt='slider2' width="100%" height="100%"/></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link><img src={slider3} alt='slider3' width="100%" height="100%"/></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link><img src={slider4} alt='slider4' width="100%" height="100%"/></Link>
          </SwiperSlide>
        <SwiperSlide>
        <Link><img src={slider5} alt='slider5'width="100%" height="100%"/></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link><img src={slider6} alt='slider6' width="100%" height="100%"/></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link><img src={slider7} alt='slider7' width="100%" height="100%" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link><img src={slider8} alt='slider8' width="100%" height="100%"/></Link>
        </SwiperSlide>
      </Swiper>
        </>
    )
}
export default Swiperr;
