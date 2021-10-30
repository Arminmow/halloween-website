import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../Footer/Footer";
import ScrollUp from "../../Components/ScrollUp";

import CandyCrush from '../../images/candy-crush.png'

function MiniGames(props) {
    return (
        <>
            <Header/>
            <div className="myContainer section mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10">

                        <div className="row p-2 mt-2 miniGames-data">
                            <div className="col-md-3 mt-1 miniGames-img-container"><img
                                className="miniGames-data-img img-fluid img-responsive rounded product-image"
                                src={CandyCrush}/></div>
                            <div className="col-md-6 mt-1 ">
                                <h5 className="miniGames-data-title">Candy Crush</h5>

                                <p className="text-justify para mb-0">Candy Crush Saga is a free-to-play match-three puzzle video game.<br/><br/></p>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 ">
                                <div className="d-flex flex-column mt-4">
                                    <button className="button miniGames-button" type="button">Play Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <ScrollUp/>
        </>
    );
}

export default MiniGames;
