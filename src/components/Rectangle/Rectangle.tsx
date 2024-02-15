/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

interface Props {
  showRectangle8: boolean;
  property1: "variant-2" | "default";
  className: any;
}

export const Rectangle = ({ showRectangle8 = true, property1, className }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[560px] h-[400px] ${state.property1 === "default" ? "border border-solid" : ""} ${
        state.property1 === "default" ? "border-black" : ""
      } ${state.property1 === "variant-2" ? "bg-[#f5ee84]" : "bg-f-5ee-84"} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "variant-2" && (
        <div className="relative h-[400px] bg-dark-brown">
          <div className="absolute w-[239px] top-[149px] left-[161px] [font-family:'Poppins',Helvetica] font-semibold text-light-yellow text-[40px] text-center tracking-[0] leading-[50px]">
           Alguns estudos
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };

    case "click":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Rectangle.propTypes = {
  showRectangle8: PropTypes.bool,
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
