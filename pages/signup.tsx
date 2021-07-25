import { useEffect, useState } from "react";
import FullPageCenter from "../components/FullPageCenter";
import { useAuth } from "../contexts/authContext";

export default function SignUp() {
  const { signUp, currentUser, logOut, logIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const handleSignUp = async () => {
    try {
      setError("");
      setLoading(true);
      await signUp("test@test.com", "password");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError((e as any).message);
      console.log("Error signing up", e);
    }
  };

  const handleLogIn = async () => {
    try {
      setError("");
      setLoading(true);
      await logIn("test@test.com", "password");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError((e as any).message);
      console.log("Error logging in", e);
    }
  };

  useEffect(() => {
    if (!currentUser) return console.log("not logged in");
    console.log("logged in as", currentUser);
  }, [currentUser]);
  return (
    <FullPageCenter>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogIn}>Log In</button>
      {loading && <p>Doing stuff...</p>}
      {error && <p>Error: {error}</p>}
      {currentUser ? (
        <>
          <p>Logged in as {currentUser.email}</p>
          <button onClick={logOut}>Sign Out</button>
        </>
      ) : (
        <p>Not logged in</p>
      )}
    </FullPageCenter>
  );
}
