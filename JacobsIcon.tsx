import React from "react";
import { ReactComponent as JbsArrowRed } from "jacobs-icons/icons/jbs-arrow-red.svg";
import { ReactComponent as JbsArrowAmber } from "jacobs-icons/icons/jbs-arrow-amber.svg";
import { ReactComponent as JbsArrowGreen } from "jacobs-icons/icons/jbs-arrow-green.svg";

interface Props {
  icon: string;
  color?: string;
}

const IconComponent: React.FC<Props> = ({ icon, color }) => {
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

export default IconComponent;
