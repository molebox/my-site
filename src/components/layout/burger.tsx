import { useContext } from "react";
import { DispatchContext, StateContext } from "../../../utlis/context";
import { HamburgerSpring } from "react-animated-burgers";
import { Box } from "@chakra-ui/react";

export default function Burger() {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  return (
    <Box
      visibility={["visible", "visible", "visible", "hidden"]}
      display={["block", "block", "block", "none"]}
    >
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
    </Box>
  );
}
