import React from "react";
import appLogo from "../../icons/logo-app.svg";
export default function Header() {
   return (
      <div>
         {" "}
         <img src={appLogo} width="32px" alt="white bear logo" />
         <h3 className="d-inline text-brand text-dark ml-1">White Bear</h3>
         <a href="/index.html" className="btn btn-link float-right">
            Log out
         </a>
         <div className="clearfix"></div>
      </div>
   );
}