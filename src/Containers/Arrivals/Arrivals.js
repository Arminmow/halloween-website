import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import ArrivalsContent from "../../Components/ArrivalsContent/ArrivalsContent";

import New1 from '../../images/new1-img.png'
import New2 from '../../images/new2-img.png'
import New3 from '../../images/new3-img.png'
import New4 from '../../images/new4-img.png'
import New5 from '../../images/new5-img.png'
import New6 from '../../images/new6-img.png'

function Arrivals(props) {


    return (
        <section className="section new" id="new">
            <h2 className="section-title">New Arrivals</h2>

            <div className="new-container myContainer">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={window.innerWidth > 667 ? 3 : window.innerWidth > 467 ? 2 : 1}
                    className="swiper new-swiper">
                    <div className="swiper-wrapper">

                        <ArrivalsContent img={New1} title="Haunted House" subtitle="Accessory" price="$14.99" discount="$29.99"/>

                        <ArrivalsContent img={New2} title="Halloween Candle" subtitle="Accessory" price="$11.99" discount="$21.99"/>

                        <ArrivalsContent img={New3} title="Witch Hat" subtitle="Accessory" price="$4.99" discount="$9.99"/>

                        <ArrivalsContent img={New4} title="Rip" subtitle="Accessory" price="$24.99" discount="$44.99"/>

                        <ArrivalsContent img={New5} title="Terrifying Crystal Ball" subtitle="Accessory" price="$5.99" discount="$12.99"/>

                        <ArrivalsContent img={New6} title="Witch Broom" subtitle="Accessory" price="$7.99" discount="$14.99"/>

                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default Arrivals;
