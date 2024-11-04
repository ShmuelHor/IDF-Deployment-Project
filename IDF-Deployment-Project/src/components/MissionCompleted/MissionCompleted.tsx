import React, { useContext } from 'react';
import { DeploymentContext } from '../../context/DeploymentContext';
import './MissionCompleted.css';

const MissionCompleted: React.FC = () => {
    const deploymentContext = useContext(DeploymentContext);

    if (!deploymentContext) {
        throw new Error("MissionCompleted must be used within a DeploymentProvider");
    }

    const { units } = deploymentContext;
    const allComplete = Object.values(units).every(status => status === 'Completed');

    return (
        <div>
            {allComplete && <h2>כל היחידות הושלמו בהצלחה!</h2>}
        </div>
    );
};

export default MissionCompleted;
