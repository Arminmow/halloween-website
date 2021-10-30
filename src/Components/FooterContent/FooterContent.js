import React from 'react';

function FooterContent({title,link1,link2,link3}) {
    return (
        <div className="footer-content">
            <h3 className="footer-title">{title}</h3>

            <ul className="footer-links">
                <li>
                    <a href="#" className="footer-link">{link1}</a>
                </li>
                <li>
                    <a href="#" className="footer-link">{link2}</a>
                </li>
                <li>
                    <a href="#" className="footer-link">{link3}</a>
                </li>
            </ul>
        </div>
    );
}

export default FooterContent;
