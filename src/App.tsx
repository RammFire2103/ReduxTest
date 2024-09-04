import { useReducer, useEffect } from "react";
import "./App.css";
import { CounterID, DecrementAction, IncrementAction, store } from "./store";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Counter counterID="1" />
      <Counter counterID="2" />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export function Counter({ counterID }: { counterID: CounterID }) {
  const [, forseUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forseUpdate();
    });

    return unsubscribe;
  }, []);

  return (
    <div className="card">
      counter {store.getState().counters[counterID]?.counter}
      <button
        onClick={() =>
          store.dispatch({
            type: "increment",
            payload: { counterID },
          } satisfies IncrementAction)
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          store.dispatch({
            type: "decrement",
            payload: { counterID },
          } satisfies DecrementAction)
        }
      >
        decrement
      </button>
    </div>
  );
}

export default App;
