import { useEffect, useReducer } from "react";
import "./App.css";
import { store } from "./store";

function App() {
  const [, forseUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forseUpdate();
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      counter {store.getState().counter}
      <button onClick={() => store.dispatch({ type: "decrement" })}>
        decrement
      </button>
      <button onClick={() => store.dispatch({ type: "increment" })}>
        increment
      </button>
    </div>
  );
}

export default App;
