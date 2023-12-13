import React from "react";
import './NotFound.css';
import { TbError404 } from "react-icons/tb";

const NotFound:React.FC = ():JSX.Element => {
    return(
        <div className="notfound-page">
            <TbError404 />
            <h1>Page Not Found</h1>
        </div>
    );
}

export default NotFound;