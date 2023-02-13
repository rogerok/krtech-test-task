import React from "react";
import { usersData } from "../../app/usersData";

const ContactsList = () => {
  const num = 0;

  return (
    <div>
      {usersData.map((user) => (
        <div>
          <p>{user.firstName} </p>
          <p>{user.firstName} </p>
          <p>{user.firstName} </p>
          <p>{user.firstName} </p>
          <p>{user.firstName} </p>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
