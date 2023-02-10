import React, { useContext } from "react";
import { cn } from "@bem-react/classname";
import { MenuContext } from "../../shared/providers/MenuProviders/MenuContext";
import Avatar from "../../shared/ui/Avatar/Avatar";
import PresenceIndicator from "../../shared/ui/PresenceIndicator/PresenceIndicator";
import avatarImg from "../../assets/images/avatar.png";
import "./Account.styles.scss";

interface AccountProps {
  thumbnail?: string;
  isOnline: boolean;
  firstName: string;
  lastName: string;
}
const Account: React.FC<AccountProps> = ({
  firstName,
  lastName,
  isOnline,
  thumbnail,
}) => {
  const account = cn("Account");
  const { open } = useContext(MenuContext);
  const avatarSize = open ? "lg" : "sm";

  return (
    <div className={account({ open })}>
      <Avatar
        className={account("Avatar", { open })}
        firstName={firstName}
        lastName={lastName}
        isOnline
        src={avatarImg}
        size={avatarSize}
      />
      <div className={account("Info", { open })}>
        <p className={account("Username")}>
          <span>{firstName}&nbsp;</span>
          <span>{lastName}</span>
        </p>
        <PresenceIndicator isOnline={isOnline} />
      </div>
    </div>
  );
};

export default Account;
