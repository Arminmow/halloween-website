import React from 'react';
import TrickContent from "../../Components/TrickContent/TrickContent";
import Trick1 from '../../images/trick-treat1-img.png'
import Trick2 from '../../images/trick-treat2-img.png'
import Trick3 from '../../images/trick-treat3-img.png'
import Trick4 from '../../images/trick-treat4-img.png'
import Trick5 from '../../images/trick-treat5-img.png'
import Trick6 from '../../images/trick-treat6-img.png'

function Trick(props) {
    return (
        <section className="section trick" id="trick">
            <h2 className="section-title">Trick Or Treat</h2>

            <div  className="trick-container myContainer grid">

                <TrickContent img={Trick1} title="Toffee" subtitle="Candy" price="$11.99"/>

                <TrickContent img={Trick2} title="Bone" subtitle="Accessory" price="$8.99"/>

                <TrickContent img={Trick3} title="Scarecrow" subtitle="Accessory" price="$15.99"/>

                <TrickContent img={Trick4} title="Candy Cane" subtitle="Candy" price="$7.99"/>

                <TrickContent img={Trick5} title="Pumpkin" subtitle="Candy" price="$19.99"/>

                <TrickContent img={Trick6} title="Ghost" subtitle="Accessory" price="$17.99"/>

            </div>
        </section>
    );
}

export default Trick;
