import { useAuth } from "../contexts/authContext";

export default function SignUp() {
  const { signUp } = useAuth();
  const handleFormSubmit = async () => {
    try {
      await signUp("test@test.com", "password");
    } catch (e) {
      console.log("Error signing up", e);
    }
  };
  return <button onClick={handleFormSubmit}>Sign Up</button>;
}
