import React from 'react';

function NewsLetter() {
    return (
        <section  className="section newsletter">
            <div  className="newsletter-container myContainer">
                <h2 className="section-title">Our Newsletter</h2>
                <p className="newsletter-description">Promotion new products and sales. Directly to your inbox</p>

                <form action="" className="newsletter-form">
                    <input type="text" placeholder="Enter your email" className="newsletter-input"/>
                    <button className="button">
                        Subscribe
                    </button>

                </form>

            </div>

        </section>
    );
}

export default NewsLetter;
