import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
// import memoryCards from "../../mock-data/memory-cards";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import indexOfCurrentCard from "../../store/reducers/indexOfCurrentCard";

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/Reina-git/white-bear-mpa/main/src/mock-data/memory-cards.json"
         )
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_QUEUED_CARDS,
               payload: res.data,
            });
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
      const memoryCard = this.props.queuedCards[this.props.indexOfCurrentCard];
      return (
         <AppTemplate>
            <div className="card">
               <div className="card">
                  <div className="card-body bg-primary lead">
                     {memoryCard && memoryCard.imagery}
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
function mapStateToProps(state) {
   return {
      queuedCards: state.queuedCards,
      indexOfCurrentCard: state.indexOfCurrentCard,
   };
}
export default connect(mapStateToProps)(ReviewImagery);
