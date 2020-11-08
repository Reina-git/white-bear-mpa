import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewImagery() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <Header />
               <Navigation />
               <div className="card">
                  <div className="card">
                     <div className="card-body bg-primary lead">
                        It is a paradisematic country, in which roasted parts of
                        sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it
                     </div>
                  </div>
                  <div className="d-inline mt-5">
                     <a href="/review-answer.html" className="btn btn-link">
                        Previous Card
                     </a>
                     <div className="float-right">
                        <a
                           href="/review-answer.html"
                           className="btn btn-outline-primary"
                        >
                           Show answer
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
