import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../Footer/Footer";
import ScrollUp from "../../Components/ScrollUp";
import ChangeLogData from "../../Components/ChangelogData/ChangeLogData";

function ChangeLog() {
    return (
        <>
            <Header/>
            <div className="section changeLog">
                <div className="myContainer grid">
                    <div className="changeLog-title">
                        <h2>ChangeLog</h2>
                    </div>

                    <ChangeLogData version="0.1.2" date="October 30 , 2021" changes={[
                        "Added Themes to the website , you can now change themes.",
                        "Added MINI GAMES tab (Just the tab not the actual games)",
                    ]}/>

                    <ChangeLogData version="0.1.1" date="October 27 , 2021" changes={[
                        "Added Changelog to the site",
                        "Removed AOS animations",
                        "Fixed navbar not in place"
                    ]}/>

                    <ChangeLogData version="0.1.0" date="October 26 , 2021" changes={[
                        "Created the first version of the website"
                    ]}/>

                </div>
            </div>
            <Footer/>
            <ScrollUp/>
        </>

    );
}

export default ChangeLog;
