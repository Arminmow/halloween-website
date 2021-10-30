import React from 'react';
import FooterContent from "../../Components/FooterContent/FooterContent";
import Logo from '../../images/logo.png'
import Footer1 from '../../images/footer1-img.png'
import Footer2 from '../../images/footer2-img.png'

function Footer(props) {
    return (
        <footer   className="footer section">
            <div className="footer-container myContainer grid">


                <div className="footer-content">
                    <a href="#" className="footer-logo">
                        <img src={Logo} className="footer-logo-img"/>
                        Halloween
                    </a>

                    <p className="footer-description">Enjoy the scariest night <br/> of your life.</p>

                    <div className="footer-social">
                        <a href="#" target="_blank" className="footer-social-link">
                            <i className='bx bxl-facebook'/>
                        </a>
                        <a href="#" target="_blank" className="footer-social-link">
                            <i className='bx bxl-instagram-alt'/>
                        </a>
                        <a href="#" target="_blank" className="footer-social-link">
                            <i className='bx bxl-twitter'/>
                        </a>
                    </div>
                </div>

                <FooterContent title="About" link1="About Us" link2="Features" link3="News"/>

                <FooterContent title="Our Services" link1="Pricing" link2="Discounts" link3="Shipping mode"/>

                <FooterContent title="Our Company" link1="Blog" link2="About us" link3="Our mission"/>

            </div>

            <span className="footer-copy">&#169; Bedimcode. All rigths reserved</span>
            <img src={Footer1} className="footer-img-one"/>
            <img src={Footer2} className="footer-img-two"/>

        </footer>
    );
}

export default Footer;
