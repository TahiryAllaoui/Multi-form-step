import { createContext } from "react";
interface plan {
    title: string;
    feeMonth: number;
    feeYear: number;
    yearPay: boolean;
    div: HTMLDivElement;
}

interface PlanType {
    pay: number;
    bill: boolean;
    totalBill: number;
    setBill: (m: boolean) => void;
    setTotalBill: (s: number) => void;
    setPay: (s: number) => void;
    button: boolean;
    setButton: (m: boolean) => void;
    clicked: boolean;
    setClicked: (m: boolean) => void;
    plan: plan;
    setPlan: (m: plan) => void;

}

const Plan = createContext<PlanType | null>(null);

export { Plan };
export type { PlanType };