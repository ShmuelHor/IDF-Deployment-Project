import React, { useContext } from 'react';
import { DeploymentContext, useGlobalUnits } from '../../context/DeploymentContext';
import './ChangeStatus.css';

type ChangeStatusProps = {
    unitName: string;
};

const ChangeStatus: React.FC<ChangeStatusProps> = ({ unitName }) => {
    const deploymentContext = useContext(DeploymentContext);
    const { setUnitStatus, units } = useGlobalUnits();
    const statuses = ['Idle', 'Active', 'Completed'];

    const currentStatus = units[unitName];
    const currentIndex = statuses.indexOf(currentStatus);
    
    if (!deploymentContext) {
        throw new Error("ChangeStatus must be used within a DeploymentProvider");
    }

    return (
        <>
            {currentStatus !== "Completed" && (
                <button onClick={() => setUnitStatus(unitName, statuses[currentIndex + 1])}>
                    פריסת {unitName}
                </button>
            )}
        </>
    );
};

export default ChangeStatus;
