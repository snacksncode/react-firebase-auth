import { useRouter } from "next/router";
import FullPageCenter from "../components/FullPageCenter";
import { useAuth } from "../contexts/authContext";

export default function Home() {
  const { currentUser, loading } = useAuth();
  const router = useRouter();

  console.log(loading);
  if (loading) return <p>Loading...</p>;
  if (currentUser == null) {
    console.log(currentUser);
    //redirect to sign up page
    router.push("/signup");
    return (
      <FullPageCenter>
        <h1>Not logged in</h1>
        <p>Redirecting...</p>
      </FullPageCenter>
    );
  }
  return (
    <>
      <h1>This is dashboard.</h1>
      <p>You&apos;re logged in as {currentUser.email}</p>
    </>
  );
}
