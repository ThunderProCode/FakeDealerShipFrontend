import React from "react";
import './PrimaryButton.css';


interface PrimaryButtonProps {
    width: string,
    height: string,
    label: string,
    fontSize?: string,
    padding?:string,
    onClick : () => void
}

const PrimaryButton:React.FC<PrimaryButtonProps> = (props):JSX.Element => {

    const { width, height, label,fontSize, padding ,onClick } = props;

    const buttonStyle = {
        width: width || '100%',
        height: height || '100%',
        fontSize: fontSize || '1em',
        padding: padding || '.2em'
    }

    return (
        <button className="primary-button-component" style={buttonStyle} onClick={onClick}>{ label }</button>
    );
}

export default PrimaryButton;