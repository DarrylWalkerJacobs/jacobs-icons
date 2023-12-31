import React from "react";
import { ReactComponent as JbsArrowRed } from "jacobs-icons/icons/jbs-arrow-red.svg";
import { ReactComponent as JbsArrowAmber } from "jacobs-icons/icons/jbs-arrow-amber.svg";
import { ReactComponent as JbsArrowGreen } from "jacobs-icons/icons/jbs-arrow-green.svg";
import { ReactComponent as JbsArrowDoubleHead } from "jacobs-icons/icons/jbs-arrow-double-head.svg";
import { ReactComponent as JbsArrowDown } from "jacobs-icons/icons/jbs-arrow-down.svg";
import { ReactComponent as JbsArrowUp } from "jacobs-icons/icons/jbs-arrow-up.svg";
import { ReactComponent as JbsArrowOpen } from "jacobs-icons/icons/jbs-arrow-open.svg";
import { ReactComponent as JbsBaseline } from "jacobs-icons/icons/jbs-baseline.svg";
import { ReactComponent as JbsCalendarForm } from "jacobs-icons/icons/jbs-calendar-form.svg";
import { ReactComponent as JbsCancel } from "jacobs-icons/icons/jbs-cancel.svg";
import { ReactComponent as JbsCollapseNav } from "jacobs-icons/icons/jbs-collapse-nav.svg";
import { ReactComponent as JbsDiamondLineFill } from "jacobs-icons/icons/jbs-diamond-line-fill.svg";
import { ReactComponent as JbsExpand } from "jacobs-icons/icons/jbs-expand.svg";
import { ReactComponent as JbsFilters } from "jacobs-icons/icons/jbs-filters.svg";
import { ReactComponent as JbsFitAllTasks } from "jacobs-icons/icons/jbs-fit-all-tasks.svg";
import { ReactComponent as JbsInfoCircleOutline } from "jacobs-icons/icons/jbs-info-circle-outline.svg";
import { ReactComponent as JbsMilestones } from "jacobs-icons/icons/jbs-milestones.svg";
import { ReactComponent as JbsOverflowMenu } from "jacobs-icons/icons/jbs-overflow-menu.svg";
import { ReactComponent as JbsPercentage } from "jacobs-icons/icons/jbs-percentage.svg";
import { ReactComponent as JbsPlus } from "jacobs-icons/icons/jbs-plus.svg";
import { ReactComponent as JbsProfile } from "jacobs-icons/icons/jbs-profile.svg";
import { ReactComponent as JbsQuestionCircleOutline } from "jacobs-icons/icons/jbs-question-circle-outline.svg";
import { ReactComponent as JbsSearch } from "jacobs-icons/icons/jbs-search.svg";
import { ReactComponent as JbsSettings } from "jacobs-icons/icons/jbs-settings.svg";
import { ReactComponent as JbsTick } from "jacobs-icons/icons/jbs-tick.svg";
import { ReactComponent as JbsToggleDown } from "jacobs-icons/icons/jbs-toggle-down.svg";
import { ReactComponent as JbsToggleUp } from "jacobs-icons/icons/jbs-toggle-up.svg";
import { ReactComponent as JbsZoomIn } from "jacobs-icons/icons/jbs-zoom-in.svg";
import { ReactComponent as JbsZoomOut } from "jacobs-icons/icons/jbs-zoom-out.svg";
import { ReactComponent as JbsZoomToToday } from "jacobs-icons/icons/jbs-zoom-to-today.svg";

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
    case "JbsArrowDoubleHead":
      return <JbsArrowDoubleHead fill={color} />;
    case "JbsArrowDown":
      return <JbsArrowDown fill={color} />;
    case "JbsArrowUp":
      return <JbsArrowUp fill={color} />;
    case "JbsArrowOpen":
      return <JbsArrowOpen fill={color} />;
    case "JbsBaseline":
      return <JbsBaseline fill={color} />;
    case "JbsCalendarForm":
      return <JbsCalendarForm fill={color} />;
    case "JbsCancel":
      return <JbsCancel fill={color} />;
    case "JbsCollapseNav":
      return <JbsCollapseNav fill={color} />;
    case "JbsDiamondLineFill":
      return <JbsDiamondLineFill fill={color} />;
    case "JbsExpand":
      return <JbsExpand fill={color} />;
    case "JbsFilters":
      return <JbsFilters fill={color} />;
    case "JbsFitAllTasks":
      return <JbsFitAllTasks fill={color} />;
    case "JbsInfoCircleOutline":
      return <JbsInfoCircleOutline fill={color} />;
    case "JbsMilestones":
      return <JbsMilestones fill={color} />;
    case "JbsOverflowMenu":
      return <JbsOverflowMenu fill={color} />;
    case "JbsPercentage":
      return <JbsPercentage fill={color} />;
    case "JbsPlus":
      return <JbsPlus fill={color} />;
    case "JbsProfile":
      return <JbsProfile fill={color} />;
    case "JbsQuestionCircleOutline":
      return <JbsQuestionCircleOutline fill={color} />;
    case "JbsSearch":
      return <JbsSearch fill={color} />;
    case "JbsSettings":
      return <JbsSettings fill={color} />;
    case "JbsTick":
      return <JbsTick fill={color} />;
    case "JbsToggleDown":
      return <JbsToggleDown fill={color} />;
    case "JbsToggleUp":
      return <JbsToggleUp fill={color} />;
    case "JbsZoomIn":
      return <JbsZoomIn fill={color} />;
    case "JbsZoomOut":
      return <JbsZoomOut fill={color} />;
    case "JbsZoomToToday":
      return <JbsZoomToToday fill={color} />;
    default:
      return <div>No icon found</div>;
  }
};

export default IconComponent;
