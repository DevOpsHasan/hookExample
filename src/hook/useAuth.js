import { useMutation } from "react-query";
import DataApi from "../api/DataApi";
import constate from "constate";

import createPersistedState from "use-persisted-state";
const useAuthState = createPersistedState("auth");

const authApi = {
  isAuthenticated: false,
  async signupApi(body) {
    const data = await DataApi.post("auth/signup", body);
    return data?.data;
  },
  async signinApi(body) {
    const data = await DataApi.post("auth/Login", body);
    return data?.data;
  },
};

// Create a custom hook
function useAuth() {
  const [auth, setAuth] = useAuthState();
  const [signinmutate] = useMutation(authApi.signinApi);
  const [signupmutate] = useMutation(authApi.signupApi);

  const signin = async (body) => {
    try {
      const data = await signinmutate(body);
      if (data?.isSuccess) {
        setAuth(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signup = async (body) => {
    try {
      const data = await signupmutate(body);
      if (data?.isSuccess) {
        setAuth(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signout = () => {
    setAuth(null);
  };

  const sendPasswordResetEmail = (email) => {
    setAuth(null);
    // return firebase

    //   .auth()

    //   .sendPasswordResetEmail(email)

    //   .then(() => {
    //     return true;
    //   });
  };

  const confirmPasswordReset = (code, password) => {
    setAuth(null);
    // return firebase

    //   .auth()

    //   .confirmPasswordReset(code, password)

    //   .then(() => {
    //     return true;
    //   });
  };

  return {
    auth,
    isLoggedIn: auth?.accessToken,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}

export const [AuthProvider, useAuthContext] = constate(useAuth);
