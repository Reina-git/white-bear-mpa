import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import axios from "axios";

const memoryCard = memoryCards[2];

export default class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/97be99a5-2f08-4e90-9749-d09cf5051a8b")
         .then(function (response) {
            // handle success
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
         .then(function () {
            // always executed
         });
   }
   render() {
      return (
         <AppTemplate>
            <div className="card">
               <div className="card">
                  <div className="card-body bg-primary lead">
                     {memoryCard.imagery}
                  </div>
               </div>
               <div className="d-inline mt-5">
                  <Link to="/review-answer" className="btn btn-link">
                     Previous Card
                  </Link>
                  <div className="float-right">
                     <Link
                        to="/review-answer"
                        className="btn btn-outline-primary"
                     >
                        Show answer
                     </Link>
                  </div>
               </div>
            </div>
         </AppTemplate>
      );
   }
}
