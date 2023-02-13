import React, { useContext } from "react";
import { cn } from "@bem-react/classname";
import { MenuContext } from "../../shared/providers/MenuProviders/MenuContext";
import Avatar, { AvatarSize } from "../../shared/ui/Avatar/Avatar";
import PresenceIndicator from "../../shared/ui/PresenceIndicator/PresenceIndicator";
import avatarImg from "../../assets/images/avatar.jpg";
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
  const avatarSize = open ? AvatarSize.LG : AvatarSize.SM;
  const presenceStatus = isOnline ? "Online" : "Offline";

  return (
    <div className={account({ open })}>
      <Avatar
        className={account("Avatar", { open })}
        firstName={firstName}
        lastName={lastName}
        src={avatarImg}
        size={avatarSize}
      />
      <section className={account("Info", { open })}>
        <p className={account("Username")}>
          <span>{firstName}&nbsp;</span>
          <span>{lastName}</span>
        </p>
        <div className={account("PresenceStatus")}>
          <PresenceIndicator
            className={account("PresenceIndicator")}
            isOnline={isOnline}
          />
          {presenceStatus}
        </div>
      </section>
    </div>
  );
};

export default Account;
