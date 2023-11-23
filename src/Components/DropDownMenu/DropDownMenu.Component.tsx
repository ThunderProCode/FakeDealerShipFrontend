import React from "react";
import './DropDownMenu.Component.Styles.css';

interface IDropDownMenuProps {
    title: string,
    options?: string[]
}

const DropDownMenu:React.FC<IDropDownMenuProps> = (props):JSX.Element => {

    const renderOptions = () => {
        if(props.options){
            return(
                <>{
                    props.options.map(option => {
                        return <p key={option} >{`${option}`}</p>
                    })
                }</>
            );
        } else {
            return <></>;
        }
    }

    return(
        <div className="dropdown">
            <button className="drop-btn">{`${props.title}`}</button>
            <div className="dropdown-content">
                { renderOptions() }
            </div>
        </div>
    );
}

export default DropDownMenu;