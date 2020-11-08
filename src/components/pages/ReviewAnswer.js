import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div className="mb-5"></div>
         <div className="mb-5">
            <div className="card">
               <div className="card-body bg-primary lead">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia
               </div>
            </div>
            <div className="card">
               <div className="card-body bg-secondary lead">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth. Even the all-powerful Pointing
                  has no control about the blind texts it
               </div>
            </div>
         </div>

         <a href="edit.html" className="btn btn-link">
            Edit
         </a>
         <div className="float-right">
            <a href="/review-empty.html" className="btn btn-outline-primary">
               Needs work
            </a>
            <a href="review-empty.html" className="btn btn-primary ml-4">
               <img
                  src={thumbsUpIcon}
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "4px" }}
                  alt=""
               />
               Got it
            </a>
         </div>
      </AppTemplate>
   );
}
