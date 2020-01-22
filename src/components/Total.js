import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  // useSelector
  const { car, additionalPrice } = useSelector(state => {
    return {
      car: state.CarReducer.car,
      additionalPrice: state.CarReducer.additionalPrice
    };
  });

  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.CarReducer.car,
    additionalPrice: state.CarReducer.additionalPrice
  };
};

export default Total;
