import { createContext } from "react";
interface add {
    title: string;
    feeMonth: number;
    feeYear: number;
    checked: boolean
    div: HTMLDivElement;
}

interface AddType {
    pay: number;
    setPay: (s: number) => void;
    totalBill: number;
    setTotalBill: (s: number) => void;
    button: boolean;
    setButton: (m: boolean) => void;
    adds: add;
    setAdd: (p: add) => void;

}

const Add = createContext<AddType | null>(null);

export { Add };
export type { AddType };