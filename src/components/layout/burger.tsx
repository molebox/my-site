import { useContext } from "react";
import { DispatchContext, StateContext } from "../../../utlis/context";
import { HamburgerSpring } from "react-animated-burgers";

export default function Burger() {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    return (
        <HamburgerSpring
            barColor="#EDEDED"
            buttonWidth={20}
            isActive={state.menuOpen}
            toggleButton={() =>
                dispatch({ type: "menuOpen", payload: !state.menuOpen })
            }
            buttonStyle={{
                cursor: "pointer",
            }}
        />
    );
};