import { set } from 'mongoose';
import React, { createContext, useContext, useState } from 'react';

interface ProviderProps {
    children: React.ReactNode;
}

// הגדרת סוג המידע עבור הקשר הפריסה
type DeploymentContextType = {
    units: { [key: string]: string };
    setUnitStatus: (unit: string, status: string) => void;
};

// יצירת ההקשר
const DeploymentContext = createContext<DeploymentContextType >({
    units: {},
    setUnitStatus: () => {},
});

const DeploymentProvider: React.FC<ProviderProps> = ({ children }) => {
    // הגדרת מצב התחלתי
    const [units, setUnits] = useState({ Golani: 'Idle', Paratroopers: 'Idle', Givati: 'Idle' });

    // פונקציה לשינוי מצב היחידות
    const setUnitStatus = (unit: string, status: string) => {
        // רמז: השתמשו ב-`setUnits` לעדכון המצב
        setUnits((prev) => ({ ...prev,[unit]: status}));
    };

    return (
        <DeploymentContext.Provider value={{ units, setUnitStatus }}>
            {children}
        </DeploymentContext.Provider>
    );
};
export const useGlobalUnits = () => {
    return useContext(DeploymentContext);
  };

export { DeploymentContext, DeploymentProvider };
