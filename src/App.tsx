import "./App.css";
import {
  CounterID,
  DecrementAction,
  IncrementAction,
  selectCounter,
  useAppSelector,
  useAppDispatch,
} from "./store";

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
  const dispatch = useAppDispatch();

  const counterState = useAppSelector((state) =>
    selectCounter(state, counterID)
  );
  // console.log("render counter", counterID);
  // const [, forseUpdate] = useReducer((x) => x + 1, 0);

  // const lastStateRef = useRef<ReturnType<typeof selectCounter>>();

  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     const currentState = selectCounter(store.getState(), counterID);
  //     const prevState = lastStateRef.current;

  //     if (currentState !== prevState) {
  //       forseUpdate();
  //     }

  //     lastStateRef.current = currentState;
  //   });

  //   return unsubscribe;
  // }, []);
  return (
    <div className="card">
      counter {counterState?.counter}
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: { counterID },
          } satisfies IncrementAction)
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          dispatch({
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
