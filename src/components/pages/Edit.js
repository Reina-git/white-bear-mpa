import React from "react";
import SaveLogo from "../../icons/save.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";
const memoryCard = memoryCards[2];

export default class Edit extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
      };
   }
   checkHasInvalidCharCount() {
      if (
         this.state.answerText.length > MAX_CARD_CHARS ||
         this.state.answerText.length === 0 ||
         this.state.imageryText.length > MAX_CARD_CHARS ||
         this.state.imageryText.length === 0
      ) {
         return true;
      } else return false;
   }

   setImageryText(e) {
      this.setState({ imageryText: e.target.value });
   }

   setAnswerText(e) {
      this.setState({ answerText: e.target.value });
   }
   render() {
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
                        onChange={(e) => this.setImageryText(e)}
                     ></textarea>
                  </div>
               </div>
               <div className="card">
                  <div className="card-body bg-secondary lead">
                     <textarea
                        rows="4"
                        id="edit-answer-input"
                        defaultValue={memoryCard.answer}
                        onChange={(e) => this.setAnswerText(e)}
                     ></textarea>
                  </div>
               </div>
            </div>
            <div
               className="float-right mt-2 mb-5 text-muted d-flex"
               id="Top-Bottom-Counter"
            >
               <p className="float-right mt-2 mb-5 text-muted">
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.imageryText,
                           MAX_CARD_CHARS
                        ),
                     })}
                  >
                     Top:{""}
                     {this.state.imageryText.length}/{MAX_CARD_CHARS}
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.answerText,
                           MAX_CARD_CHARS
                        ),
                     })}
                  >
                     Bottom: {this.state.answerText.length}/{MAX_CARD_CHARS}
                  </span>
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
                  className={classnames("btn btn-primary ml-4", {
                     disabled: this.checkHasInvalidCharCount(),
                  })}
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
                  <p>{toDisplayDate(memoryCard.createdAt, "MMM. d, yyyy")}</p>
               </div>
               <div className="col-3 mt-2">
                  <p className="text-muted">Last attempt:</p>
               </div>
               <div className="col-9 mt-2">
                  <p>
                     {toDisplayDate(memoryCard.lastAttemptAt, "MMM. d, yyyy")}
                  </p>
               </div>
               <div className="col-3 mt-2">
                  <p className="text-muted">Next attempt:</p>
               </div>
               <div className="col-9 mt-2">
                  <p>
                     {toDisplayDate(memoryCard.nextAttemptAt, "MMM. d, yyyy")}
                  </p>
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
}
