import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div className="card">
            <div className="card">
               <div className="card-body bg-primary lead">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth. Even the all-powerful Pointing
                  has no control about the blind texts it
               </div>
            </div>
            <div className="d-inline mt-5">
               <Link to="/review-answer" className="btn btn-link">
                  Previous Card
               </Link>
               <div className="float-right">
                  <Link to="/review-answer" className="btn btn-outline-primary">
                     Show answer
                  </Link>
               </div>
            </div>
         </div>
      </AppTemplate>
   );
}
