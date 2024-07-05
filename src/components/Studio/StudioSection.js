import React from "react";
import arrow from '../../icons/Group.png'
import '../Studio/StudioSection.css'
import Cards from "./Cards";

function StudioSection() {
    return (
        <div class="studio">
            <div class="higlighter-menu">
                <h1>Studio insights</h1>
                <a href="" class="button">
                    <img src={arrow} alt="Ar"/>Read all news
                    <span class="underline"></span>
                </a>
            </div>
            <Cards/>
        </div>
    );
  }

  export default StudioSection