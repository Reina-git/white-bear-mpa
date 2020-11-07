import React from "react";
import appLogo from "../../icons/logo-app.svg";
import saveLogo from "../../icons/save.svg";
import Header from "../ui/Header";

export default function CreateImagery() {
   return (
      <div>
         <div
            className="bg-success w=100 lead d-none justify-content-center fixed-top"
            id="overlay-success"
         >
            <img src="icons/success.svg" width="32px" alt="" />
            <p className="d-inline py-4 ml-2">Card created!</p>
         </div>

         <div
            className="bg-danger w=100 lead d-none justify-content-center fixed-top"
            id="overlay-error"
         >
            <img src="/icons/error.svg" width="32px" alt="" />
            <p className="d-inline py-4 ml-2">
               Oops! Our bad. Please try again.
            </p>
         </div>

         <div className="container">
            <div className="row">
               <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <Header />
                  <div
                     className="btn-group d-flex mt-1 my-2"
                     role="navigation"
                     aria-label="navigation"
                  >
                     <a
                        href="/create-answer.html"
                        className="btn tab-active btn-secondary"
                     >
                        Create new
                     </a>
                     <a
                        href="/review-imagery.html"
                        className="btn btn-secondary tab-separator"
                     >
                        Review
                     </a>
                     <a
                        href="/all-cards.html"
                        className="btn btn-secondary tab-separator"
                     >
                        All cards
                     </a>
                  </div>
                  <p className="text-center lead text-muted my-2">
                     {" "}
                     Add memorable imagery
                  </p>
                  <div className="card">
                     <div className="card-body bg-primary lead">
                        <textarea
                           rows="11"
                           id="create-imagery-input"
                           autoFocus={true}
                        ></textarea>
                     </div>
                  </div>
                  <div className="card">
                     <div className="card-body bg-secondary lead">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary regelialia
                     </div>
                  </div>

                  <p
                     className="float-right mt-2 mb-5 text-muted"
                     id="char-count"
                  >
                     <span id="imagery-char-count">0</span>/240
                  </p>
                  <div className="clearfix"></div>

                  <button className="btn btn-link" id="back-card">
                     Back to answer
                  </button>

                  <button
                     className="btn btn-primary btn-lg ml-4 float-right"
                     disabled={true}
                     id="save-card"
                  >
                     <img
                        src={saveLogo}
                        width="20px"
                        style={{ marginBottom: "3px", marginRight: "4px" }}
                        alt=""
                     />
                     Save
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
