import React from "react";
import { cn } from "@bem-react/classname";
import "./PresenceIndicator.styles.scss";

interface StatusIndicatorProps {
  isOnline: boolean;
}

const PresenceIndicator: React.FC<StatusIndicatorProps> = ({ isOnline }) => {
  const presenceIndicator = cn("PresenceIndicator");
  return (
    <div className={presenceIndicator({ online: isOnline })}>
      {isOnline ? "Online" : "Offline"}
    </div>
  );
};
export default PresenceIndicator;
