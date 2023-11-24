import React from "react";
import './DropDownMenu.Component.Styles.css';
import { useDispatch } from 'react-redux';
import { switchFilter } from "../../features/filterSlice";
import { FaCarAlt } from "react-icons/fa";

interface IDropDownMenuProps {
    title: string,
    options?: string[]
}

const DropDownMenu:React.FC<IDropDownMenuProps> = (props):JSX.Element => {

    const dispatch = useDispatch();

    const handleClick = (option:string) => {
        dispatch(switchFilter(`body-${option}`));
    }

    const renderOptions = () => {
        if(props.options){
            return(
                <>{
                    props.options.map(option => {
                        return <p key={option} onClick={() => {handleClick(option)}}>{`${option}`}</p>
                    })
                }
                </>
            );
        } else {
            return <></>;
        }
    }

    return(
        <div className="dropdown">
            <button className="drop-btn">{`${props.title}`}<FaCarAlt /></button>
            <div className="dropdown-content">
                { renderOptions() }
            </div>
        </div>
    );
}

export default DropDownMenu;