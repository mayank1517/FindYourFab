import React from "react";
import { Link } from "react-router-dom";
const SideBarForAdmin = () => {
  return (
    <div className="SideBaradmin-container">
      <div className="nameadmin">ADMIN</div>
      <ul className="adminul">
        <Link to="Create-Item">
          <li className="adminli active">Create Item</li>
        </Link>
        <Link to="/Edit-items">
          <li className="adminli">All Items</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBarForAdmin;
