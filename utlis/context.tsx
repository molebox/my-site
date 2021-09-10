import React from "react";

export const StateContext = React.createContext(null);
export const DispatchContext = React.createContext(null);

interface Values {
    menuOpen: boolean;
    searchOpen: boolean;
}

const initialValues: Values = {
    menuOpen: false,
    searchOpen: false,
};

const reducer = (state, action) => {
    const { type, payload } = action;
    return { ...state, [type]: payload };
};

export default function Provider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initialValues);

    return (
        <DispatchContext.Provider value={dispatch} >
            <StateContext.Provider value={state}> {children} </StateContext.Provider>
        </DispatchContext.Provider>
    );
};
