import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { SliderProducts } from "../../data/products"

import "./Slider.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Slider = () => {
  return (
    <div className="s-container">
        <Swiper
        modules={[Pagination, Navigation]}
        className="s-swiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        >
            {SliderProducts.map((slide, i) => (
                <SwiperSlide key={i}>
                    <div className="left-s">
                        <div className="name">
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>

                        <span>${slide.price}</span>
                        <div>Shop now</div>
                    </div>

                    <img src={slide.img} alt="Product" className="img-p" />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider