import { useEffect, useRef, useReducer } from "react";
import { logs } from "../../index";
import { fireDocs } from "../backendFuncs";
//
// Hook
export default function UseFirestoreQuery(query, funcas) {
  //

  // Our initial state
  // Start with an "idle" status if query is falsy, as that means hook consumer is
  // waiting on required data before creating the query object.
  // Example: useFirestoreQuery(uid && firestore.collection("profiles").doc(uid))
  const initialState = {
    status: query ? "loading" : "idle",
    data: undefined,
    error: undefined,
  };

  const reducer = (state, action) => {
    let bassDate = {
      status: undefined,
      data: undefined,
      error: undefined,
      loading: undefined,
      idle: undefined,
    };

    switch (action.type) {
      case "idle":
        return {
          status: "idle",
          idle: true,
        };
      case "loading":
        return {
          status: "loading",
          loading: true,
        };
      case "success":
        if (funcas) {
          funcas(action.payload);
        }

        return {
          searched: true,
          status: "success",
          data: action.payload,
          error: undefined,
        };
      case "error":
        return {
          searched: true,
          status: "error",
          data: undefined,
          error: action.payload,
        };
      default:
        throw new Error("invalid action");
    }
  };

  function useMemoCompare(next, compare) {
    // Ref for storing previous value
    const previousRef = useRef();
    const previous = previousRef.current;

    // Pass previous and next value to compare function
    // to determine whether to consider them equal.
    const isEqual = compare(previous, next);

    // If not equal update previousRef to next value.
    // We only update if not equal so that this hook continues to return
    // the same old value if compare keeps returning true.
    useEffect(() => {
      if (!isEqual) {
        previousRef.current = next;
      }
    });

    // Finally, if equal then return the previous value
    return isEqual ? previous : next;
  }

  // Setup our state and actions
  const [state, dispatch] = useReducer(reducer, initialState);

  // Get cached Firestore query object with useMemoCompare (https://usehooks.com/useMemoCompare)
  // Needed because firestore.collection("profiles").doc(uid) will always being a new object reference
  // causing effect to run -> state change -> rerender -> effect runs -> etc ...
  // This is nicer than requiring hook consumer to always memoize query with useMemo.
  const queryCached = useMemoCompare(query, (prevQuery) => {
    // Use built-in Firestore isEqual method to determine if "equal"
    return prevQuery && query && query.isEqual(prevQuery);
  });

  useEffect(() => {
    // Return early if query is falsy and reset to "idle" status in case
    // we're coming from "success" or "error" status due to query change.
    if (!queryCached) {
      dispatch({ type: "idle" });
      return;
    }

    dispatch({ type: "loading" });

    // Subscribe to query with onSnapshot
    // Will unsubscribe on cleanup since this returns an unsubscribe function
    return queryCached.onSnapshot(
      (response) => {
        // Get data for collection or doc
        const data =
          //
          fireDocs(response);
        // response.docs
        //   ? getCollectionData(response.docs)
        //   : getDocData(response);

        dispatch({ type: "success", payload: data });
      },
      (error) => {
        dispatch({ type: "error", payload: error });
      }
    );
  }, [queryCached]); // Only run effect if queryCached changes

  return state;
}
