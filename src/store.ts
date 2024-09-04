import { configureStore } from "@reduxjs/toolkit";

type State = {
  counter: number;
};

export type IncrementAction = {
  type: "increment";
};

export type DecrementAction = {
  type: "decrement";
};

const initialState: State = {
  counter: 0,
};

type Action = IncrementAction | DecrementAction;

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});
