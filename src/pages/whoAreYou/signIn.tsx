import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignInPage: NextPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  const handleGoogleSignIn = () => {
    signIn("google", {
      redirect: false,
      callbackUrl: "/",
    });
  };

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (!!session) {
    router.push("/");
  }

  return (
    <div className="grid grid-cols-1 place-items-center gap-2 items-center">
      <h1>Sign In / Sign Up</h1>

      <button onClick={handleGoogleSignIn}>Google</button>

      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="********" />
      </form>
    </div>
  );
};

export default SignInPage;
