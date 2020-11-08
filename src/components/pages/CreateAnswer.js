import React from "react";

import AppTemplate from "../ui/AppTemplate";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <p className="text-center lead text-muted my-2"> Add an answer</p>

         <div className="card">
            <div className="card-body bg-secondary lead">
               <textarea
                  rows="11"
                  id="create-answer-input"
                  autofocus
               ></textarea>
            </div>
         </div>

         <p className="float-right mt-2 mb-5 text-muted" id="char-count">
            <span id="answer-char-count">0</span>/240
         </p>
         <div className="clearfix"></div>

         <button
            href="/create-imagery.html"
            className="btn btn-outline-primary btn-lg ml-4 float-right"
            disabled="true"
            id="save-card"
         >
            Next
         </button>
      </AppTemplate>
   );
}
