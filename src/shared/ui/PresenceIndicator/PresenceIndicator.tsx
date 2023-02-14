import React from "react";
import { cn } from "@bem-react/classname";
import "./PresenceIndicator.styles.scss";

interface StatusIndicatorProps {
  isOnline: boolean;
  withText?: boolean;
  className?: string;
}

export const PresenceIndicator: React.FC<StatusIndicatorProps> = ({
  isOnline,
  className,
  withText = false,
}) => {
  const presenceIndicator = cn("PresenceIndicator");
  const textIndicator = isOnline ? "Online" : "Offline";
  return (
    <div className={presenceIndicator({ online: isOnline }, [className])}>
      {withText && textIndicator}
    </div>
  );
};
