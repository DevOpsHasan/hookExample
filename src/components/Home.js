import React from "react";
import Layout from "./Layout";
import { useAuthContext } from "../hook/useAuth";

export default function Home() {
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn) {
    return (
      <Layout>
        <div>I am Home {isLoggedIn}</div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div>I am Home fgsd</div>
      </Layout>
    );
  }
}
