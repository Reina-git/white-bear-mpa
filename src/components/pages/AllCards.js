import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "../../icons/edit.svg";
import AppTemplate from "../ui/AppTemplate";

export default function AllCards() {
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
                  <select className="form-control form-control-sm">
                     <option>Most recent</option>
                     <option>Oldest</option>
                     <option>Hardest</option>
                     <option>Easiest</option>
                  </select>
               </div>
            </div>

            <div className="d-flex align-items-start mb-5">
               <div className="app-card">
                  <div className="card">
                     <div className="card-body bg-primary 16pt">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the S emantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary re
                     </div>
                  </div>
                  <div className="card">
                     <div className="card-body bg-secondary 16pt">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary regelialia
                     </div>
                  </div>
               </div>

               <Link to="/edit" className="btn btn-link ml-4 d-flex mt-n2">
                  <img
                     src={EditIcon}
                     className="d-inline"
                     style={{
                        marginBottom: "2px",
                        marginRight: "8px",
                     }}
                     width="20px"
                     alt=""
                  />
                  Edit
               </Link>
            </div>
            <div className="d-flex align-items-start">
               <div className="app-card">
                  <div className="card">
                     <div className="card-body bg-primary 16pt">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the S emantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary re
                     </div>
                  </div>
                  <div className="card">
                     <div className="card-body bg-secondary 16pt">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary regelialia
                     </div>
                  </div>
               </div>

               <Link to="/edit" className="btn btn-link ml-4 d-flex mt-n2">
                  <img
                     src={EditIcon}
                     className="d-inline"
                     style={{
                        marginBottom: "2px",
                        marginRight: "8px",
                     }}
                     width="20px"
                     alt=""
                  />
                  Edit
               </Link>
            </div>
         </AppTemplate>
      </div>
   );
}
