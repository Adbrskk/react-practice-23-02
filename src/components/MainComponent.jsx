import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import RegistrationForm from "./RegistrationForm";
import UserProfile from "./UserProfile";

export default function MainComponent() {
  const { isRegistered } = useContext(UserContext);

  return isRegistered ? <UserProfile /> : <RegistrationForm />;
}