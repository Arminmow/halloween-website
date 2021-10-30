import React from 'react';
import DiscountImg from '../../images/discount-img.png'

function Discount() {
    return (
        <section className="section discount">
            <div className="discount-container myContainer grid">
                <div  className="discount-data">
                    <h2 className="discount-title">50% Discount <br/> On New Products</h2>
                    <a href="#" className="button">Go to new</a>
                </div>
                <img  src={DiscountImg} className="discount-img"/>
            </div>
        </section>
    );
}

export default Discount;
