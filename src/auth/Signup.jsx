import React, { useContext } from "react";
import { globalContext } from "../context/GlobalContext";


export default function SignUp() {
  const [, , , , handleSignup] = useContext(globalContext);

  return (
    <>
      <section className="login-tabs padding-large">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 mt-5">
              <p className="mb-0">Sign-Up With Email</p>
              <hr className="my-1" />

              <form
                className="form-group flex-wrap"
                onSubmit={(e) => handleSignup(e)}
              >
                <div className="form-input col-lg-12 my-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="form-control mb-3 p-4"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="form-control mb-3 p-4"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Set your password"
                    className="form-control mb-3 p-4"
                  />

                  <div className="d-grid my-3">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg rounded-1"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}