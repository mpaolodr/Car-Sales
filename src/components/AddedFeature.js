import React from "react";

// action type
import { REMOVE_FEATURE } from "../actions";

const AddedFeature = ({ feature, dispatch }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => dispatch({ type: REMOVE_FEATURE, payload: feature })}
      >
        X
      </button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
