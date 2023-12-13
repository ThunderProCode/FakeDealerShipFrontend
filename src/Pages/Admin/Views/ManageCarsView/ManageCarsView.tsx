import React, { useEffect } from "react";
import './ManageCarsView.css';
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import PrimaryButton from "../../../../Shared/PrimaryButton/PrimaryButton";
import { MdRemoveRedEye, MdOutlineModeEdit, MdDelete, MdAddCircle } from "react-icons/md";

interface ManageCarsViewProps {
    userData: string | null;
}

const ManageCarsView:React.FC<ManageCarsViewProps> = (props):JSX.Element => {

    const cars = useSelector((state:RootState) => state.cars.data);
    const navigate = useNavigate();
    const { userData } = useSelector((state:RootState) => state.auth);


    useEffect(() => {
        if(!userData){
            navigate("/admin");
        }
    },[userData, navigate])

    return (
        <>
            <table className="cars-table">
                <thead className="table-header">
                    <tr>
                        <th className="left-column">Make</th>
                        <th className="left-column">Model</th>
                        <th className="left-column">Year</th>
                        <th className="left-column">Mileage</th>
                        <th className="right-column">
                            <PrimaryButton width="30%" padding=".5em" label="Add" backgroundColor="var(--secondary-color)" btnIcon={<><MdAddCircle/></>}/>
                        </th>
                    </tr>
                </thead>
                <tbody className="table-body">
                {
                    cars.map((car) => {
                        return(
                            <tr key={car.id} className="table-row">
                                    <td className="left-column">{ car.make }</td>
                                    <td className="left-column">{ car.model }</td>
                                    <td className="left-column">{ car.year }</td>
                                    <td className="left-column">{ car.mileage }</td>
                                    <td className="right-column">
                                        <PrimaryButton width="20%" height="100%" label="View" padding=".5em" fontSize=".9em" btnIcon={<><MdRemoveRedEye/></>}/>
                                        <PrimaryButton width="20%" height="100%" label="Edit" padding=".5em" fontSize=".9em" btnIcon={<><MdOutlineModeEdit/></>}/>
                                        <PrimaryButton width="24%" height="100%" label="Remove" padding=".5em" fontSize=".9em" btnIcon={<><MdDelete/></>}/>
                                    </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </>
    );
}

export default ManageCarsView;