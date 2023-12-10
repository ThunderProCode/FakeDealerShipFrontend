import React from "react";
import './PrimaryButton.css';


interface PrimaryButtonProps {
    width: string,
    height?: string,
    label: string,
    fontSize?: string,
    padding?:string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick? : () => void
}

const PrimaryButton:React.FC<PrimaryButtonProps> = (props):JSX.Element => {

    const { width, height, label,fontSize, padding , type , onClick } = props;

    const buttonStyle = {
        width: width || '100%',
        height: height || '100%',
        fontSize: fontSize || '1em',
        padding: padding || '.2em'
    }

    return (
        <button className="primary-button-component" style={buttonStyle} onClick={onClick} type={ type || "button" }>{ label }</button>
    );
}

export default PrimaryButton;