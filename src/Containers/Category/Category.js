import React from 'react';
import CategoryData from "../../Components/CategoryData/CategoryData";
import Games from '../../images/games.png'
import Category2 from '../../images/category2-img.png'
import Category3 from '../../images/category3-img.png'

function Category() {
    return (
        <section className="section category">
            <h2 className="section-title">Favorite Scare <br/> Category</h2>

            <div className="category-container myContainer grid">

                <CategoryData img={Games} title="Mini Games" link="/mini-games"
                              description="Play some mini games and HAVE FUN."/>

                <CategoryData img={Category2} title="Pumpkins" link="#"
                              description="You look at the scariest pumpkins there is."/>

                <CategoryData img={Category3} title="Witch Hat" link="#"
                              description="Pick the most stylish witch hats out there."/>

            </div>
        </section>
    );
}

export default Category;
