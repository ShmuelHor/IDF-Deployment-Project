import React, { useContext } from "react";
import { DeploymentContext } from "../../context/DeploymentContext";
import UnitStatus from "../UnitStatus/UnitStatus";
import ChangeStatus from "../ChangeStatus/ChangeStatus";
import './UnitList.css';

const UnitList: React.FC = () => {
    const deploymentContext = useContext(DeploymentContext);

    if (!deploymentContext) {
        throw new Error("UnitList must be used within a DeploymentProvider");
    }

    const { units } = deploymentContext;

    return (
        <div>
            <h2>רשימת יחידות</h2>
            {Object.keys(units).map((unit) => (
                <div key={unit} className={`unit-container ${units[unit].toLowerCase()}`}>
                    <UnitStatus unitName={unit} />
                    <ChangeStatus unitName={unit} />
                </div>
            ))}
        </div>
    );
};

export default UnitList;
