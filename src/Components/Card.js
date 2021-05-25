import React, { useState } from "react";
import chip from "../images/chip.png";
import cardStyles from "../utils/data";

const Card = () => {
  const [number, setNumber] = useState("");
  const [cardType, setCardType] = useState("");

  const getCardType = (cardNum) => {
    var payCardType = "";
    var regexMap = [
      { regEx: /^4[0-9]{5}/gi, cardType: "visa" },
      { regEx: /^5[1-5][0-9]{4}/gi, cardType: "mastercard" },
      { regEx: /^3[47][0-9]{3}/gi, cardType: "amex" },
      { regEx: /^(5[06-8]\d{4}|6\d{5})/gi, cardType: "maestro" },
    ];

    for (var j = 0; j < regexMap.length; j++) {
      if (cardNum.match(regexMap[j].regEx)) {
        payCardType = regexMap[j].cardType;
        break;
      }
    }

    if (
      cardNum.indexOf("50") === 0 ||
      cardNum.indexOf("60") === 0 ||
      cardNum.indexOf("65") === 0
    ) {
      var g = "508500-508999|606985-607984|608001-608500|652150-653149";
      var i = g.split("|");
      for (var d = 0; d < i.length; d++) {
        var c = parseInt(i[d].split("-")[0], 10);
        var f = parseInt(i[d].split("-")[1], 10);
        if (
          cardNum.substr(0, 6) >= c &&
          cardNum.substr(0, 6) <= f &&
          cardNum.length >= 6
        ) {
          payCardType = "rupay";
          break;
        }
      }
    }
    // console.log(payCardType);
    setCardType(payCardType);
    return payCardType;
  };

  const takeNumber = (e) => {
    setNumber(e.target.value);
    getCardType(number);
  };

  return (
    <div className="cover">
      <div className="card">
        <div className="card-header">
          <div className="card-img">
            <img src={chip} alt="Card Chip" />
          </div>
          <div className="card-img">{cardType}</div>
        </div>
        <div className="card-number">
          <input type="tel" value={number} placeholder="#### #### #### ####" />
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
          <input type="text" onChange={takeNumber} />
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
