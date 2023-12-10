import React from "react";
import './ManageOrdersView.css';
import { Navigate } from "react-router";

interface ManageOrdersViewProps {
    userData: string | null;
}

const ManageOrdersView:React.FC<ManageOrdersViewProps> = (props):JSX.Element => {

    const { userData } = props;

    if(!userData){
        return <Navigate to="/admin" replace />
    }

    return(
        <>
            <h2>Coming Soon</h2>
        </>
    );
}

export default ManageOrdersView;