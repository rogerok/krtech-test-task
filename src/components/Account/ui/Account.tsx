import React, { useContext } from "react";
import { cn } from "@bem-react/classname";
import { observer } from "mobx-react-lite";
import { userStore } from "shared/store/user.store";
import { MenuContext } from "shared/providers/MenuProviders/MenuContext";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { PresenceIndicator } from "shared/ui/PresenceIndicator/PresenceIndicator";
import "./Account.styles.scss";

export const Account = observer(() => {
  const { firstName, lastName, isOnline, thumbnail } = userStore.userData;
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
        src={thumbnail}
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
});
