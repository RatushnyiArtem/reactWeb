import React from "react";
import vectorPicture from '../../images/getInSync.png'
import topButton from '../../icons/10.png'
import star from '../../icons/star-solid.svg'
import '../Footer/Footer.css'

function Footer() {
    return (
        <div class="footer">
            <div class="footer-top">
                <p>Interested in working with us?</p>
                <a href="">
                    Back to top
                    <img src={topButton} alt="Button"/>
                </a>
            </div>
            <div class="footer-vector">
                <img src={vectorPicture} alt="Picture"/>
            </div>
            <div class="footer-content">
                <div class="call-block">
                    <h1>team@in-sync.agency</h1>
                    <h1>Book a call</h1>
                </div>
                <div class="rating-block">
                    <div class="rate-score">
                        <p>Top rated plus</p>
                        <p>UPWORK </p>
                    </div>
                    <div class="top-rate-names">
                        <p>5.0
                        <img src={star} alt="Picture"/>
                        <img src={star} alt="Picture"/>
                        <img src={star} alt="Picture"/>
                        <img src={star} alt="Picture"/>
                        <img src={star} alt="Picture"/>
                        </p>
                        <p>CLUTCH </p>
                    </div>
                </div>
            </div>
            <div class="footer-links">
                <div class="link">
                    <p>Driven by craft, culture and imagination.</p>
                    <p>All rights reserved. <span>Privacy policy, </span><span>Cookie</span></p>
                </div>
                <div class="link">
                    <p>Instagram, LinkedIn, Dribbble</p>
                    <p>©2024</p>
                </div>
            </div>
        </div>
    );
  }

  export default Footer