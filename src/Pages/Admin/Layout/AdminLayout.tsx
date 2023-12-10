import React from "react";
import "./AdminLayout.css";
import Navbar from "../../../Shared/Navbar/Navbar.Component";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";


const AdminLayout:React.FC = ():JSX.Element => {

    const { userData } = useSelector((state:RootState) => state.auth);

    return(
        <>
            <Navbar admin={ userData? true : false } user={false}/>
            <div className="admin-page">
                <Outlet/>
            </div>
        </>
    );
}

export default AdminLayout;