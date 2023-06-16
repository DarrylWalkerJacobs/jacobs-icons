import React from "react";

import { ReactComponent as JbsArrowRed } from "./icons/jbs-arrow-red.svg";
import { ReactComponent as JbsArrowAmber } from "./icons/jbs-arrow-amber.svg";
import { ReactComponent as JbsArrowGreen } from "./icons/jbs-arrow-green.svg";
// Import other SVG components...

const iconMapping = {
  JbsArrowRed,
  JbsArrowAmber,
  JbsArrowGreen,
};

interface Props {
  icon: string;
  color?: string;
}

const IconComponent: React.FC<Props> = ({ icon, color }) => {
  const Icon = iconMapping[icon];

  if (Icon) {
    return <Icon fill={color} />;
  }

  return <div>No icon found</div>;
};

export default IconComponent;
