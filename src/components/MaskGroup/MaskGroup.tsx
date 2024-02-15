/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const MaskGroup = ({ className }: Props): JSX.Element => {
  return (
    <div className={`relative w-[972px] h-[539px] ${className}`}>
      <img
        className="absolute w-[553px] h-[555px] top-[46px] left-[437px] mix-blend-darken object-cover"
        alt="Portfolio llouzada"
        src="/img/portfolio-llouzada-1.png"
      />
    </div>
  );
};
