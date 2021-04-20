import React, { useContext, useMemo, createContext, useReducer } from "react";

const AffMenuContext = createContext();

function submitReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "stats": {
      return {
        ...state,
        stats: !action.value,
        lego: false,
        covenant: false,
        talents: false,
        raid: false,
      };
    }
    case "lego": {
      return {
        ...state,
        lego: !action.value,
        stats: false,
        covenant: false,
        talents: false,
        raid: false,
      };
    }

    case "covenant": {
      return {
        ...state,
        covenant: !action.value,
        stats: false,
        lego: false,
        talents: false,
        raid: false,
      };
    }

    case "talents": {
      return {
        ...state,
        talents: !action.value,
        stats: false,
        lego: false,
        covenant: false,
        raid: false,
      };
    }

    case "raid": {
      return {
        ...state,
        raid: !action.value,
        stats: false,
        stats: false,
        lego: false,
        covenant: false,
        talents: false,
      };
    }

    default:
      break;
  }
  return state;
}
const initialState = {
  stats: false,
  lego: false,
  covenant: false,
  talents: false,
  raid: false,
};

export function AffMenuProvider(props) {
  const [state, dispatch] = useReducer(submitReducer, initialState);

  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <AffMenuContext.Provider value={value} {...props} />;
}

export function Menu() {
  const context = useContext(AffMenuContext);
  if (!context) {
    throw new Error("No esta dentro del Proveedor");
  }
  return context;
}
