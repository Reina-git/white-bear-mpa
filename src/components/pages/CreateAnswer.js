import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <p className="text-center lead text-muted my-2"> Add an answer</p>

         <div className="card">
            <div className="card-body bg-secondary lead">
               <textarea
                  rows="11"
                  id="create-answer-input"
                  autoFocus={true}
               ></textarea>
            </div>
         </div>

         <p className="float-right mt-2 mb-5 text-muted" id="char-count">
            <span id="answer-char-count">0</span>/240
         </p>
         <div className="clearfix"></div>

         <Link
            to="/create-imagery"
            className="btn btn-outline-primary btn-lg ml-4 float-right"
            disabled={true}
            id="save-card"
         >
            Next
         </Link>
      </AppTemplate>
   );
}
