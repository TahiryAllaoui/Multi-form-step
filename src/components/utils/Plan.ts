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
    setPlanCheckedIndexes: (val: number[]) => void,
    currentPlanIndex: number,
    setCurrentPlanIndex: (val: number) => void,
    totalPrice: number,
    setTotalPrice: (val: number) => void
}

export const PlanContext = createContext<PlanContextType>({
    monthly: true,
    setMonthly: (val: boolean) => { },
    setPlan: (a: PlanInterface) => { },
    plan: {
        title: '',
        monthPrice: 0,
        yearPrice: 0,
        checked: false
    },
    isPlanButtonDisabled: true,
    setIsPlanButtonDisabled: (val: boolean) => { },
    planCheckedIndexes: [],
    setPlanCheckedIndexes: (val: number[]) => { },
    currentPlanIndex: 0,
    setCurrentPlanIndex: (val: number) => { },
    totalPrice: 0,
    setTotalPrice: (val: number) => { }
});