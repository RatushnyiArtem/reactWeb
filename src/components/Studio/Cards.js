import React from "react";
import CardItem from "./CardItem";
import pic1 from '../../images/Frame84.png'
import pic2 from '../../images/Frame80.png'
import pic3 from '../../images/Frame81.png'
import pic4 from '../../images/Frame79.png'
import pic5 from '../../images/Frame82.png'
import pic6 from '../../images/Frame83.png'
import './Cards.css';

function Cards(props) {
    return (
      <>
            <div class="news-wrapper">
                <CardItem
                    src = {pic1}
                    text = 'Design strategies for scaling your business'
                />
                <CardItem
                    src = {pic2}
                    text = 'A few things your UX designer can learn from your shrink'
                />
                <CardItem
                    src = {pic3}
                    text = 'The journey of crafting memorable products'
                />
                <CardItem
                    src = {pic4}
                    text = 'Starting a new chapter with In Sync'
                />
                <CardItem
                    src = {pic5}
                    text = 'How effective design boosts business performance'
                />
                <CardItem
                    src = {pic6}
                    text = 'Design strategies for scaling your business'
                />
            </div>
      </>
    );
  }



export default Cards;