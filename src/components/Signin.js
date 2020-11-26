import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hook/useAuth";
import Layout from "./Layout";

export default function Signin() {
  const { register, handleSubmit } = useForm();
  const { signin, signout } = useAuthContext();
  const { isLoading } = useState(false);

  return (
    <Layout>
      <form onSubmit={handleSubmit(signin)} className="inplgnin">
        <p className="Lead">Already Have an account?</p>
        <div className="form-group my-1">
          <input
            ref={register}
            id="UserName"
            name="Email"
            type="text"
            className="form-control form-control-sm"
            placeholder="Enter your Email..."
            required
          />
        </div>
        <div className="form-group my-1">
          <input
            ref={register}
            id="password"
            name="Password"
            type="password"
            className="form-control form-control-sm"
            placeholder="Enter your Password..."
            required
          />
        </div>
        <div className="form-group my-1">
          {isLoading ? (
            <p>Loggin In...</p>
          ) : (
            <>
              <button
                type="submit"
                disabled={isLoading}
                onClick={handleSubmit(signin)}
                className="btn btn-outline-success-custom btn-sm btn-block"
              >
                Log-in
              </button>
            </>
          )}
          <Link to="/ForgotPassword">Forgot your password?</Link>
        </div>
      </form>
      <button
        onClick={signout}
        className="btn btn-outline-success-custom btn-sm btn-block"
      >
        Log-out
      </button>
    </Layout>
  );
}
