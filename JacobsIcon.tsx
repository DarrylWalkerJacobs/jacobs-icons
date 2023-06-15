import React from "react";

import { ReactComponent as JbsArrowRed } from "./icons/jbs-arrow-red.svg";
import { ReactComponent as JbsArrowAmber } from "./icons/jbs-arrow-amber.svg";
import { ReactComponent as JbsArrowGreen } from "./icons/jbs-arrow-green.svg";

interface Props {
  icon: string;
  color?: string;
}

const JacobsIcon: React.FC<Props> = ({ icon, color }) => {
  switch (icon) {
    case "JbsArrowRed":
      return <JbsArrowRed fill={color} />;
    case "JbsArrowAmber":
      return <JbsArrowAmber fill={color} />;
    case "JbsArrowGreen":
      return <JbsArrowGreen fill={color} />;
    default:
      return <div>No icon found</div>;
  }
};

export default JacobsIcon;
