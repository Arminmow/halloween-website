import React from 'react';
import AboutImg from '../../images/about-img.png'

function About(props) {
    return (
        <section className="section about" id="about">
            <div className="about-container myContainer grid">
                <div  className="about-data">
                    <h2 className="section-title about-title">About Halloween <br/> Night</h2>
                    <p className="about-description">Night of all the saints, or all the dead, is celebrated on October 31 and it is a
                        very fun international celebration, this celebration comes from ancient origins, and is already
                        celebrated by everyone.</p>
                    <a href="#" className="button">Know more</a>
                </div>
                <img  src={AboutImg} className="about-img"/>
            </div>

        </section>
    );
}

export default About;
