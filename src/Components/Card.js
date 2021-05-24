import React from "react";
import chip from "../images/chip.png";
import cardType from "../images/mastercard.png";
import backgroundImage from "../images/6.jpeg";

const Card = () => {
  return (
    <div className="cover">
      <div className="card">
        <div className="card-header">
          <div className="card-img">
            <img src={chip} alt="Card Chip" />
          </div>
          <div className="card-img">
            <img src={cardType} alt="Card Type" />
          </div>
        </div>
        <div className="card-number">
          <input type="text" />
        </div>
        <div className="card-details">
          <div className="hoder-name">
            <h6>Card Holder</h6>
            <h4>Gautham H C</h4>
          </div>
          <div className="card-time">
            <h6>Expires</h6>
            <h4>MM/YY</h4>
          </div>
        </div>
      </div>

      <form className="card-form">
        <div className="card-creator">
          <p>Card Number</p>
          <input type="text" />
        </div>
        <div className="card-creator">
          <p>Card Name</p>
          <input type="text" />
        </div>
        <div className="card-creator">
          <p>Expiration Date</p>
          <input type="text" />
        </div>
        <div className="card-creator">
          <button className="card-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Card;
