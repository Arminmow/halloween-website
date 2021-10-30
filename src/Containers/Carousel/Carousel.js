import React from 'react';
import { Swiper } from "swiper/react";
import HomeSlide from "../../Components/HomeSlide/HomeSlide";
import Home1 from '../../images/home1-img.png'
import Home2 from '../../images/home2-img.png'
import Home3 from '../../images/home3-img.png'
function Carousel() {


    return (
        <>
            <section className="home myContainer" id="home">
                <Swiper  className="swiper home-swiper">
                    <div className="swiper-wrapper">

                        <HomeSlide img={Home1} detailTitle="The Labu “Reiza”"
                                   detailSubtitle="The Living Pumpkin"
                                   subtitle="#1 Top Scariest Ghost"
                                   title={<div>UOOOO <br/> TRICK OR <br/> TREAT!!</div>}
                                   description="Hi, I'm Reiza, people call me 'El Labu'. I am
                                        currently trying to learn
                                        something new, building my own bike with parts made only in Malaysia."/>

                        <HomeSlide img={Home2}
                                   detailTitle="Adino & Grahami"
                                   detailSubtitle="No words can describe them"
                                   subtitle="#2 top Best duo"
                                   title={<div>BRING BACK <br/> MY COTTON <br/> CANDY</div>}
                                   description="Adino steals cotton candy from his brother and eats
                                        them all in one bite,
                                        a hungry beast. Grahami can no longer contain his anger towards Adino."/>


                        <HomeSlide img={Home3}
                                   detailTitle="Captain Sem"
                                   detailSubtitle="Veteran Spooky Ghost"
                                   subtitle="#3 Top Scariest Ghost"
                                   title={<div>RESPAWN <br/> THE SPOOKY <br/> SKULL</div>}
                                   description="In search for cute little puppy, Captain Sem has
                                        come back from his tragic death.
                                        With his hogwarts certified power he promise to be a hero for all of
                                        ghostkind."/>

                    </div>
                </Swiper>
            </section>
        </>
    );
}

export default Carousel;
