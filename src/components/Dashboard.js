import React from "react";
import Layout from "./Layout";
import { useAuthContext } from "../hook/useAuth";

export default function Dashboard() {
  const { isLoggedIn } = useAuthContext();
  if (isLoggedIn) {
    return (
      <Layout>
        <div>I am ddashboard {isLoggedIn}</div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div>I am Home ddashboard </div>
      </Layout>
    );
  }
}
