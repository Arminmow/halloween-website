import React from 'react';
import Header from "../../Components/Header/Header";
import Carousel from "../Carousel/Carousel";
import Category from "../Category/Category";
import About from "../About/About";
import Trick from "../Trick/Trick";
import Discount from "../Discount/Discount";
import Arrivals from "../Arrivals/Arrivals";
import NewsLetter from "../NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";
import ScrollUp from "../../Components/ScrollUp";

function Home() {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Category/>
            <About/>
            <Trick/>
            <Discount/>
            <Arrivals/>
            <NewsLetter/>
            <Footer/>
            <ScrollUp/>
        </div>
    );
}

export default Home;
