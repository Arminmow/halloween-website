import React from 'react';
import {Link} from "react-router-dom";

function CategoryData({img , title , description , link}) {
    return (
        <div  className="category-data">
            <Link to={link}>
                <img src={img} className="category-img"/>
                <h3 className="category-title">{title}</h3>
            </Link>
            <p className="category-description">{description}</p>
        </div>
    );
}

export default CategoryData;
