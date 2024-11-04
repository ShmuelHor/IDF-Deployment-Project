import React, { useContext } from "react";
import { DeploymentProvider, DeploymentContext, useGlobalUnits } from "./context/DeploymentContext";
import UnitList from "./components/UnitList/UnitList";
import MissionCompleted from "./components/MissionCompleted/MissionCompleted";
import './App.css';

const App: React.FC = () => {
    const { units, setUnitStatus } = useGlobalUnits();

    const resetUnitStatuses = () => {
        Object.keys(units).forEach((unitName: string) => {
            setUnitStatus(unitName, "Idle");
        });
    };

    return (
        <div>
            <h1>מעקב פריסת יחידות צה"ל</h1>
            <UnitList />
            <MissionCompleted />
            <button onClick={resetUnitStatuses}>Reset Unit Status</button>
        </div>
    );
};

export default App;
