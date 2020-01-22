import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = () => {
  // useSelector hook
  const { additionalFeatures } = useSelector(state => {
    return {
      additionalFeatures: state.CarReducer.additionalFeatures
    };
  });

  // useDispatch hool
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              dispatch={dispatch}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
