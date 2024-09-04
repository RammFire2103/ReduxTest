import { useReducer, useEffect } from "react";
import "./App.css";
import { DecrementAction, IncrementAction, store } from "./store";

function App() {
  const [, forseUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forseUpdate();
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        counter {store.getState().counter}
        <button
          onClick={() =>
            store.dispatch({ type: "increment" } satisfies IncrementAction)
          }
        >
          increment
        </button>
        <button
          onClick={() =>
            store.dispatch({ type: "decrement" } satisfies DecrementAction)
          }
        >
          decrement
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
