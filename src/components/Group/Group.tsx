/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

interface Props {
  property1: "variant-2" | "default";
  className: any;
  overlapGroupClassName: any;
  rectangleClassName: any;
  rectangleClassNameOverride: any;
  divClassName: any;
  text: string;
}

export const Group = ({
  property1,
  className,
  overlapGroupClassName,
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
  text = "Resume",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[164px] h-[68px] ${className}`}
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
      <div
        className={`relative ${state.property1 === "variant-2" ? "w-[158px]" : ""} ${
          state.property1 === "variant-2" ? "left-[6px]" : ""
        } ${state.property1 === "variant-2" ? "top-[7px]" : ""} ${
          state.property1 === "variant-2" ? "h-[61px]" : "h-[68px]"
        } ${state.property1 === "variant-2" ? "rounded-[6px]" : ""} ${
          state.property1 === "variant-2" ? "bg-yellow" : ""
        } ${overlapGroupClassName}`}
      >
        {state.property1 === "default" && (
          <>
            <div
              className={`absolute w-[158px] h-[61px] top-[7px] left-[6px] bg-yellow rounded-[6px] ${rectangleClassName}`}
            />
            <div
              className={`absolute w-[158px] h-[61px] top-0 left-0 rounded-[6px] border border-solid border-dark-brown ${rectangleClassNameOverride}`}
            />
            <div
              className={`absolute top-[15px] left-[38px] [font-family:'Poppins',Helvetica] font-normal text-dark-brown text-[20px] tracking-[0] leading-[normal] ${divClassName}`}
            >
              {text}
            </div>
          </>
        )}

        {state.property1 === "variant-2" && (
          <>
            <div className="absolute w-[158px] h-[61px] top-0 left-0 rounded-[6px] border border-solid border-dark-brown" />
            <div className="absolute top-[14px] left-[39px] [font-family:'Poppins',Helvetica] font-normal text-dark-brown text-[20px] tracking-[0] leading-[normal]">
              {text}
            </div>
          </>
        )}
      </div>
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

Group.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
};
