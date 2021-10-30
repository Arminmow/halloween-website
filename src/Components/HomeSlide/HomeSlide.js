import React from 'react';
import { SwiperSlide } from "swiper/react";

function HomeSlide({img, detailTitle , detailSubtitle , subtitle , title , description}) {
    console.log("im ere")
    return (
        <SwiperSlide className="swiper-slide">
            <div className="home-content grid">
                <div className="home-group">
                    <img src={img} className="home-img"/>
                    <div className="home-indicator"/>

                    <div className="home-details-img">
                        <h4 className="home-details-title">{detailTitle}</h4>
                        <span className="home-details-subtitle">{detailSubtitle}</span>
                    </div>
                </div>

                <div className="home-data">
                    <h3 className="home-subtitle">{subtitle}</h3>
                    <h1 className="home-title">{title}</h1>
                    <p className="home-description">{description}</p>

                    <div className="home-buttons">
                        <a href="#" className="button">Book Now</a>
                        <a href="#" className="button-link button-flex">Track Record <i
                            className='bx bx-right-arrow-alt button__icon'/></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );
}

export default HomeSlide;
