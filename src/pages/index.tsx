import { MainLayout } from "@src/ui/__shared__/Layouts/MainLayout";
import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  const { data: session, status } = useSession();

  const router = useRouter();

  const handleSignOut = () => {
    signOut({ redirect: false, callbackUrl: "/" });
  };

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (!session && status === "unauthenticated") {
    router.push("/whoAreYou/signIn");
  }

  return (
    <MainLayout>
      <div className="flex flex-col gap-2">
        <h1>{hello.data?.greeting}</h1>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </MainLayout>
  );
};

export default Home;
