import React from "react";

//action type
import { ADD_FEATURE } from "../actions";

const AdditionalFeature = ({ feature, dispatch }) => {
  return (
    <li>
      <button
        className="button"
        onClick={() => dispatch({ type: ADD_FEATURE, payload: feature })}
      >
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
