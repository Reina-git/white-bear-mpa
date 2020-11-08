import React from "react";
import LogoLanding from "../../images/logo-landing.png";
import { Link } from "react-router-dom";

export default function Landing() {
   return (
      <div class="background-image">
         <div class="container">
            <div class="row">
               <div class="col-12 ml-6 mt-6">
                  <img src={LogoLanding} class="mt-n5" alt="night sky" />
                  <h1 class="d-inline text-brand ml-3 mt-4">White Bear</h1>
               </div>
            </div>
            {/* <!-- this is the nice to meet you card--> */}
            <div class="row">
               <div class="col-12 col-lg-5">
                  <div class="card card-body-padding mt-9 d-flex justify-content-center">
                     <h2>Nice to meet you</h2>
                     <p>Sign up for White Bear. Free forever.</p>
                     <button
                        class="btn btn-success btn-block d-flex justify-content-center mt-5"
                        id="sign-up-button"
                     >
                        Sign up
                     </button>
                     {/* <!-- change style to "display= none" to make the sign up buttom display the email address and password --> */}
                     <div id="sign-up-card" style={{}}>
                        <p class="text-success mt-3">Let's get you signed up</p>

                        <p class="text-muted mt-3 lead">Email address</p>

                        <div class="input-group mb-3 mt-2">
                           <input
                              style={{}}
                              type="text"
                              id="sign-up-email-input"
                              class="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default"
                           />
                        </div>
                        <p
                           class="text-danger lead mt-2"
                           id="sign-up-email-error"
                        ></p>
                        <p class="text-muted mt-3 lead">Create a password</p>
                        <p class="text-muted lead">
                           Must be at least 9 characters.
                        </p>
                        <div class="input-group mb-3 mt-2">
                           <input
                              style={{}}
                              type="text"
                              class="form-control"
                              id="sign-up-password-input"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default"
                           />
                        </div>

                        <p
                           class="lead mt-2 text-danger"
                           id="sign-up-password-error"
                        ></p>

                        <Link
                           to="/create-answer"
                           class="btn btn-success btn-block mt-5"
                           id="letsGoButton"
                        >
                           Let's go!
                        </Link>
                     </div>
                  </div>
               </div>

               {/* <!-- this is the welcome back card--> */}

               <div class="col-12 col-lg-5">
                  <div class="card card-body-padding mt-9 d-flex justify-content-center">
                     <h2>Welcome back</h2>
                     <p class="mt-3">
                        Log in with your email address and password.
                     </p>
                     <p class="text-muted mt-3 lead">Email address</p>

                     <div class="input-group mb-3 mt-2">
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"
                           id="email-input"
                        />
                     </div>

                     <p class="text-muted mt-3 lead">Password</p>

                     <div class="input-group mb-3 mt-2">
                        <input
                           type="text"
                           class="form-control"
                           aria-label="Sizing example input"
                           id="password-input"
                           aria-describedby="inputGroup-sizing-default"
                        />
                     </div>

                     <Link
                        to="/create-answer"
                        id="login-button"
                        class="btn btn-success mt-5"
                     >
                        Login!
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
