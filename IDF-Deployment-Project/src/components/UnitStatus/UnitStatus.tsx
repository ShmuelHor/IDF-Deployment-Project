import React, { useContext } from 'react';
import { DeploymentContext } from '../../context/DeploymentContext';
import './UnitStatus.css';

type UnitStatusProps = {
    unitName: string;
};

const UnitStatus: React.FC<UnitStatusProps> = ({ unitName }) => {
    const deploymentContext = useContext(DeploymentContext);
    if (!deploymentContext) {
        throw new Error("UnitStatus must be used within a DeploymentProvider");
    }

    const { units } = deploymentContext;
    const status = units[unitName];

    return <p className={`unit-status ${status.toLowerCase()}`}>{unitName}: {status}</p>;
};

export default UnitStatus;
