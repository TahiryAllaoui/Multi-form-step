import { createContext } from "react";
export interface PlanInterface {
    title: string;
    monthPrice: number;
    yearPrice: number;
    checked: boolean;
}

export interface PlanContextType {
    monthly: boolean
    setMonthly: (val: boolean) => void,
    setPlan: (a: PlanInterface) => void,
    plan: PlanInterface,
    isPlanButtonDisabled: boolean,
    setIsPlanButtonDisabled: (val: boolean) => void,
    planCheckedIndexes: number[],
    setPlanCheckedIndexes: (val: number[]) => void
}

export const PlanContext = createContext<PlanContextType | null>(null);