import React from "react";
import propTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.cardImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <Link to={"/Detail/characters"}>
          <a href="#" className="btn btn-primary">
            {props.cardBigButton}
          </a>
        </Link>
        <a href="#" className="btn btn-outline-warning mr-6">
          <i class="far fa-heart"></i>
        </a>
      </div>
    </div>
  );
};
Card.propTypes = {
  cardTitle: propTypes.string,
  cardText: propTypes.string,
  cardBigButton: propTypes.string,
  cardImage: propTypes.any,
};
export default Card;
