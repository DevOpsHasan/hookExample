import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../hook/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useAuthContext();

  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
