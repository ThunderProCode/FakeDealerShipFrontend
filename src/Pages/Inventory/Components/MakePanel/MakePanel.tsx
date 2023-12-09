import React,{ useEffect } from 'react';
import './MakePanel.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store';
import { fetchMakes } from '../../../../features/makesSlice';
import { IoMdClose } from "react-icons/io";
import { switchFilter } from '../../../../features/filterSlice';

interface MakePanelProps {
    onClose: () => void
}

const MakePanel:React.FC<MakePanelProps> = (props):JSX.Element => {

    const { onClose } = props;

    const dispatch = useDispatch<AppDispatch>();
    const makes = useSelector((state:RootState) => state.makes.data);
    const makesStatus = useSelector((state:RootState) => state.makes.status);

    const handleClick = (make:string) => {
        onClose();
        dispatch(switchFilter(`make-${make}`));
    }

    useEffect(() => {
        if(makesStatus === 'idle'){
            dispatch(fetchMakes());
        }
    },[makesStatus,dispatch])

    return(
        <>
            <div className="makes-overlay">
                <ul className="makes-panel">
                    <header className="makes-header">
                        <h2>Select a make:</h2>
                        <button onClick={() => onClose()}><IoMdClose/></button>
                    </header>
                    {
                        makes.map((make) => <li key={make} onClick={() => handleClick(make)}>{ `${make}` }</li>)
                    }
                </ul>
            </div>
        </>
    );
}

export default MakePanel;