import { createContext } from "react";
interface add {
    title: string;
    feeMonth: number;
    feeYear: number;
    yearPay: boolean;
    div: HTMLDivElement;
}

interface AddType {
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
    plan: add;
    setPlan: (m: add) => void;

}

const Add = createContext<AddType | null>(null);

export { Add };
export type { AddType };