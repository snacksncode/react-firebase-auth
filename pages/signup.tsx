import { useEffect, useState } from "react";
import FullPageCenter from "../components/FullPageCenter";
import SignUpForm from "../components/SignUpForm";
import { useAuth } from "../contexts/authContext";

export default function SignUp() {
  const { signUp, currentUser, logOut, logIn } = useAuth();

  const handleSignUp = async () => {
    await signUp("test@test.com", "password");
  };

  const handleLogIn = async () => {
    await logIn("test@test.com", "password");
  };

  useEffect(() => {
    if (!currentUser) return console.log("not logged in");
    console.log("logged in as", currentUser);
  }, [currentUser]);

  return (
    <FullPageCenter>
      {/* <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogIn}>Log In</button> */}
      <SignUpForm />
    </FullPageCenter>
  );
}
