import React from "react";
import SaveLogo from "../../icons/save.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import toDisoplayDate from "date-fns/format";
const memoryCard = memoryCards[2];

export default function Edit() {
   return (
      <AppTemplate>
         <p className="text-center lead text-muted my-2">Edit card</p>
         <div id="edit-cards-total">
            <div className="card">
               <div className="card-body bg-primary lead">
                  <textarea
                     rows="4"
                     id="edit-imagery-input"
                     defaultValue={memoryCard.imagery}
                  ></textarea>
               </div>
            </div>
            <div className="card">
               <div className="card-body bg-secondary lead">
                  <textarea
                     rows="4"
                     id="edit-answer-input"
                     defaultValue={memoryCard.answer}
                  ></textarea>
               </div>
            </div>
         </div>
         <div
            className="float-right mt-2 mb-5 text-muted d-flex"
            id="Top-Bottom-Counter"
         >
            <p>
               Top: <span id="edit-imagery-char-count">0</span>/240 Bottom:{" "}
               <span id="edit-answer-char-count">0</span>/240
            </p>
         </div>

         <div className="clearfix"></div>

         <Link to="/all-cards" className="btn btn-link">
            Discard changes
         </Link>
         <div className="float-right">
            <Link
               to="/all-cards"
               id="edit-save-card"
               className="btn btn-primary ml-4 disabled"
            >
               <img
                  src={SaveLogo}
                  alt=""
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "4px" }}
               />
               Save
            </Link>
         </div>
         <div className="clearfix"></div>

         <p className="text-center lead text-muted mt-5 mb-3">
            Card properties
         </p>
         <div className="row">
            <div className="col-3 mt-2">
               <p className="text-muted">Created on:</p>
            </div>
            <div className="col-9 mt-2">
               <p>{toDisoplayDate(memoryCard.createdAt, "MMM. d, yyyy")}</p>
            </div>
            <div className="col-3 mt-2">
               <p className="text-muted">Last attempt:</p>
            </div>
            <div className="col-9 mt-2">
               <p>{toDisoplayDate(memoryCard.lastAttemptAt, "MMM. d, yyyy")}</p>
            </div>
            <div className="col-3 mt-2">
               <p className="text-muted">Next attempt:</p>
            </div>
            <div className="col-9 mt-2">
               <p>{toDisoplayDate(memoryCard.nextAttemptAt, "MMM. d, yyyy")}</p>
            </div>
            <div className="col-3 mt-2">
               <p className="text-muted">Consecutives:</p>
            </div>
            <div className="col-9 mt-2">
               <p>{memoryCard.totalSuccessfulAttempts}</p>
            </div>
         </div>
         <div className="row">
            <div className="col-12 mt-3">
               <div className="custom-control custom-checkbox">
                  <input
                     type="checkbox"
                     className="custom-control-input"
                     id="show-delete"
                  />
                  <label
                     className="custom-control-label"
                     htmlFor={"show-delete"}
                  >
                     Show delete button
                  </label>
               </div>

               <div className="mt-4 mb-3">
                  <button
                     className="btn btn-outline-danger d-none"
                     id="delete-button"
                  >
                     Delete this card
                  </button>
               </div>
            </div>
         </div>
      </AppTemplate>
   );
}
