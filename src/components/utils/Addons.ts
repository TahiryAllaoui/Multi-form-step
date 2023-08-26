import { createContext } from "react";

export interface AddOn {
    title: string;
    monthPrice: number;
    yearPrice: number;
}

export interface AddOnContextType {
    setAddons: (addOns: AddOn[]) => void,
    addOns: AddOn[],
    checkedIndexes: boolean[],
    setCheckedIndexes: (val: boolean[]) => void,
    totalAddOnPrice: number,
    setTotalAddOnPrice: (val: number) => void,
}

export const AddOnContext = createContext<AddOnContextType>({
    setAddons: (_addOns: AddOn[]) => { },
    addOns: [],
    checkedIndexes: [],
    setCheckedIndexes: (_val: boolean[]) => { },
    totalAddOnPrice: 0,
    setTotalAddOnPrice: (_val: number) => { }
});