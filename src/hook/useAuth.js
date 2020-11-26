import { useMutation } from "react-query";
import DataApi from "../api/DataApi";
import constate from "constate";

import createPersistedState from "use-persisted-state";
const useAuthState = createPersistedState("auth");

const authApi = {
  isAuthenticated: false,
  async AuthApi([body, path]) {
    const data = await DataApi.post(`auth/${path}`, body);
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
      const data = await signinmutate([body, 'signin']);
      if (data?.isSuccess) {
        setAuth(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signup = async (body) => {
    try {
      const data = await signupmutate([body, 'signup']);
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
