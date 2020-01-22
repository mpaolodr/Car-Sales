import React from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import AddedFeature from "./AddedFeature";

const AddedFeatures = () => {
  // useSelector
  const car = useSelector(state => state.CarReducer.car);

  // useDispatch hook
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} dispatch={dispatch} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
