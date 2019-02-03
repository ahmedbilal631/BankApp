import React, { Component } from 'react';
import './materialize.css';
import './displayAccList.css';
import image from './appInfoPic.jpg';


class DisplayInfo extends Component {
    
    render() {
        return (
            <div className="displayBody orange lighten-5 container">
                <div className="appOtBox">
                <p className="appTitle">Roll#_4682(MSD-Batch#2 Saylani-FSD)</p>
                <p className="apptxt">ThankYou Dear Sir Umar Ahmad for teaching US!</p>
                <p className="appTitle">Submitted By</p>
                <p className="apptxt">Ahmed Bilal (Faqeer)</p>
                <p className="apptxt">R#_4682</p>
                <p className="apptxt">irumzas2017@gmail.com</p>
                <p className="apptxt"><img src={image} alt="img" /></p>
                </div>
            </div>
        );
    }
}

export default DisplayInfo;