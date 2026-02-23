import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserProfile() {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <div className="wrapper">
      <div className="profileCard">
        <h2>Профиль пользователя</h2>

        <p>Логин: {user.login}</p>
        <p>Email: {user.email}</p>

        <button onClick={logoutUser}>Выйти</button>
      </div>
    </div>
  );
}