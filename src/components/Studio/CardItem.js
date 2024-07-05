import React from "react";


function CardItem(props) {
    return (
      <>
            <div class="news-item">
                <div class="news-page">
                    <img src={props.src} alt="Picture"/>
                </div>
                <div class="news-description">
                    <p>{props.text}</p>
                </div>
            </div>
      </>
    );
  }



export default CardItem;