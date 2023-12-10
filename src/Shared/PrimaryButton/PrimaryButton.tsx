import React, { useState } from "react";
import './PrimaryButton.css';


interface PrimaryButtonProps {
    width: string,
    height?: string,
    label: string,
    fontSize?: string,
    padding?:string,
    type?: "button" | "submit" | "reset" | undefined,
    btnIcon?: JSX.Element,
    backgroundColor?: string,
    onClick? : () => void
}

const PrimaryButton:React.FC<PrimaryButtonProps> = (props):JSX.Element => {

    const { width, height, label,fontSize, padding , type , btnIcon , backgroundColor ,onClick } = props;
    const [ isHover, setIsHover ] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handeMouseLeave = () => {
        setIsHover(false);
    }

    const getBackgroundColor:string = backgroundColor || "var(--primary-color)";

    const buttonStyle = {
        width: width || '100%',
        height: height || '100%',
        fontSize: fontSize || '1em',
        padding: padding || '.2em',
        backgroundColor:  isHover ?  "#3e0000" : getBackgroundColor,
        justifyContent: btnIcon ? "space-between" : "center"
    }

    return (
        <button className="primary-button-component" 
                style={buttonStyle} 
                onClick={onClick} 
                type={ type || "button" }
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handeMouseLeave}>
            { label }
            { btnIcon }
        </button>
    );
}

export default PrimaryButton;