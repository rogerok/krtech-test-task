import React from "react";
import { cn } from "@bem-react/classname";
import "./PresenceIndicator.styles.scss";
import { observer } from "mobx-react-lite";

interface StatusIndicatorProps {
  isOnline: boolean;
  withText?: boolean;
  className?: string;
}

export const PresenceIndicator: React.FC<StatusIndicatorProps> = observer(
  ({ isOnline, className, withText = false }: StatusIndicatorProps) => {
    const presenceIndicator = cn("PresenceIndicator");
    const textIndicator = isOnline ? "Online" : "Offline";
    return (
      <div className={presenceIndicator({ online: isOnline }, [className])}>
        {withText && textIndicator}
      </div>
    );
  }
);
