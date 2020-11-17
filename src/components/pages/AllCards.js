import React from "react";
import memoryCards from "../../mock-data/memory-cards";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import orderBy from "lodash/orderBy";

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      const defaultOrder = '[["createdAt"], ["asc"]]';
      this.state = {
         order: defaultOrder,
         memoryCards: orderBy(memoryCards, defaultOrder),
      };
   }

   filterByInput(e) {}

   setOrder(e) {
      const newOrder = e.target.value;
      this.setState({ order: newOrder }, () => this.setMemoryCards());
   }

   setMemoryCards() {
      const copyOfMemoryCards = [...this.state.memoryCards];
      const toJson = JSON.parse(this.state.order);
      const orderedMemoryCards = orderBy(copyOfMemoryCards, ...toJson);
      this.setState({ memoryCards: orderedMemoryCards });
   }

   // setMemoryCardsOrder(e) {
   //    const copyOfMemoryCards = [...this.state.memoryCards];
   //    const toJson = JSON.parse(newOrder);
   //    const orderedMemoryCards = orderBy(copyOfMemoryCards, ...toJson);
   //    this.setState({ order: newOrder, memoryCards: orderedMemoryCards });
   // }
   render() {
      return (
         <div>
            {/* <div
            className="bg-success w=100 lead d-none justify-content-center fixed-top"
            id="overlay-success"
         >
            <img src="icons/success.svg" width="32px">
      <p className="d-inline py-4 ml-2">Card created!</p>
  </div>   */}

            <AppTemplate>
               <div className="row my-4">
                  <div className="col-8">
                     <input
                        className=" form-control form-control-sm"
                        type="text"
                        placeholder="Search for a word"
                     />
                  </div>
                  <div className="col-4">
                     <button className="btn btn-primary btn-block btn-sm">
                        Search
                     </button>
                  </div>
               </div>

               <div className="row my-4 no-gutters">
                  <div className="col-4">
                     <p className="text-muted mt-2">Sort cards by</p>
                  </div>
                  <div className="col-8">
                     <select
                        value={this.state.order}
                        className="form-control form-control-sm"
                        onChange={(e) => this.setOrder(e)}
                     >
                        <option value='[["createdAt"], ["desc"]]'>
                           Most recent
                        </option>
                        <option value='[["createdAt"], ["asc"]]'>Oldest</option>
                        <option value='[["totalSuccessfulAttempts", "createdAt"], ["desc", "desc"]]'>
                           Hardest
                        </option>
                        <option value='[["totalSuccessfulAttempts", "createdAt"], ["asc", "asc"]]'>
                           Easiest
                        </option>
                     </select>
                  </div>
               </div>
               {this.state.memoryCards.map((memoryCard) => {
                  return (
                     <MemoryCard
                        answer={memoryCard.answer}
                        imagery={memoryCard.imagery}
                        key={memoryCard.id}
                     />
                  );
               })}
            </AppTemplate>
         </div>
      );
   }
}
