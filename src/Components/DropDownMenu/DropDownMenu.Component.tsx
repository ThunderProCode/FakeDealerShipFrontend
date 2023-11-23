import React from "react";
import './DropDownMenu.Component.Styles.css';

interface IDropDownMenuProps {
    title: string
}

const DropDownMenu:React.FC<IDropDownMenuProps> = (props):JSX.Element => {
    return(
        <div className="dropdown">
            <button className="drop-btn">{`${props.title}`}</button>
            <div className="dropdown-content">
                <p>Option 1</p>
                <p>Option 2</p>
                <p>Option 3</p>
            </div>
        </div>
    );
}

export default DropDownMenu;