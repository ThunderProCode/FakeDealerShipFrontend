import React from "react";
import "./AdminLayout.css";
import Navbar from "../../../Shared/Navbar/Navbar.Component";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ImSad } from "react-icons/im";

const AdminLayout:React.FC = ():JSX.Element => {

    const { userData } = useSelector((state:RootState) => state.auth);

    return(
        <>
            <Navbar admin={ userData? true : false } user={false}/>
            <div className="admin-page">
                <Outlet/>
            </div>
            <div className="admin-page-mobile">
                <ImSad />
                <h2>This Page is Not Available on Mobile</h2>
            </div>
        </>
    );
}

export default AdminLayout;