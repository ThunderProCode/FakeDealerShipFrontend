import React from "react";
import "./AdminLayout.css";
import Navbar from "../../../Shared/Navbar/Navbar.Component";
import { Outlet } from "react-router";

const AdminLayout:React.FC = ():JSX.Element => {
    return(
        <>
            <Navbar admin={false} user={false}/>
            <div className="admin-page">
                <Outlet/>
            </div>
        </>
    );
}

export default AdminLayout;