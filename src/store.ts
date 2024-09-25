import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

type CounterState = {
  counter: number;
};
export type CounterID = string;

type State = {
  counters: Record<CounterID, CounterState | undefined>;
};

export type IncrementAction = {
  type: "increment";
  payload: {
    counterID: CounterID;
  };
};

export type DecrementAction = {
  type: "decrement";
  payload: {
    counterID: CounterID;
  };
};

const initialState: State = {
  counters: {},
};

const initialCounterState: CounterState = {
  counter: 0,
};

type Action = IncrementAction | DecrementAction;

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "increment": {
      const { counterID } = action.payload;
      const currentCounter = state.counters[counterID] ?? initialCounterState;
      return {
        ...state,
        counters: {
          ...state.counters,
          [counterID]: {
            counter: currentCounter.counter + 1,
          },
        },
      };
    }
    case "decrement": {
      const { counterID } = action.payload;
      const currentCounter = state.counters[counterID] ?? initialCounterState;
      return {
        ...state,
        counters: {
          ...state.counters,
          [counterID]: {
            counter: currentCounter.counter - 1,
          },
        },
      };
    }
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});

export const selectCounter = (state: AppState, counterID: CounterID) =>
  state.counters[counterID];

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppState = useStore.withTypes<typeof store>();
