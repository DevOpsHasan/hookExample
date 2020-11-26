import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./hook/useAuth";
import Home from "./components/Home";
import Login from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* <Route exact path="/Dashboard" component={Dashboard} /> */}
        <PrivateRoute exact path="/Dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route exact path="/Signin" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default function AppWithAuth(props) {
  return (
    <AuthProvider>
      <App {...props} />
    </AuthProvider>
  );
}
