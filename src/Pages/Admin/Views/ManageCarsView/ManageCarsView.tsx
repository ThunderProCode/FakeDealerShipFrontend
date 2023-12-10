import React from "react";
import './ManageCarsView.css';
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

interface ManageCarsViewProps {
    userData: string | null;
}

const ManageCarsView:React.FC<ManageCarsViewProps> = (props):JSX.Element => {

    const { userData } = props;
    const cars = useSelector((state:RootState) => state.cars.data);

    if(!userData){
        return <Navigate to="/admin" replace />
    }

    return (
        <>
            <table className="cars-table">
                <tr className="table-header">
                    <section className="header-left">
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Mileage</th>
                    </section>
                    <button>Add Car</button>
                </tr>
                {
                    cars.map((car) => {
                        return(
                            <tr className="table-data">
                                <section className="data-left">
                                    <td>{ car.make }</td>
                                    <td>{ car.model }</td>
                                    <td>{ car.year }</td>
                                    <td>{ car.mileage }</td>
                                </section>
                                <section className="data-right">
                                    <button>View</button>
                                    <button>Add</button>
                                    <button>Remove</button>
                                </section>
                            </tr>
                        );
                    })
                }
            </table>
        </>
    );
}

export default ManageCarsView;