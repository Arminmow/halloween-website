import React from 'react';

function TrickContent({img, title, subtitle, price}) {
    return (
        <div className="trick-content">
            <img src={img} className="trick-img"/>
            <h3 className="trick-title">{title}</h3>
            <span className="trick-subtitle">{subtitle}</span>
            <span className="trick-price">{price}</span>
            <button className="button trick-button">
                <i className="bx bx-cart-alt trick-icon"/>
            </button>
        </div>
    );
}

export default TrickContent;
