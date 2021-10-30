import React from 'react';
import {SwiperSlide} from "swiper/react";

function ArrivalsContent({img,title,subtitle,price,discount}) {
    return (
        <SwiperSlide className="new-content swiper-slide">
            <div className="new-tag">New</div>
            <img src={img} className="new-img"/>
            <h3 className="new-title">{title}</h3>
            <span className="new-subtitle">{subtitle}</span>

            <div className="new-prices">
                <span className="new-price">{price}</span>
                <span className="new-discount">{discount}</span>
            </div>

            <button className="button new-button">
                <i className="bx bx-cart-alt new-icon"/>
            </button>
        </SwiperSlide>
    );
}

export default ArrivalsContent;
