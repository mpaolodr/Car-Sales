import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const CarReducer = (state = initialState, action) => {
  switch (action.type) {
    //   add feature
    case ADD_FEATURE:
      const names = state.car.features.map(item => item.name.toLowerCase());

      if (names.indexOf(action.payload.name.toLowerCase()) === -1) {
        return {
          ...state,
          additionalPrice: state.additionalPrice + action.payload.price,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload]
          }
        };
      } else {
        alert("Item already exists!");
        return {
          ...state,
          car: {
            ...state.car,
            features: state.car.features
          }
        };
      }

    //   remove feature
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            item => item.id !== action.payload.id
          )
        }
      };
    default:
      return state;
  }
};
