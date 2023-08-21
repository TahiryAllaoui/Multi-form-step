import { createContext } from "react";

export interface AddOn {
    title: string;
    monthPrice: number;
    yearPrice: number;
    checked: boolean;
}

export interface AddOnContextType {
    setAddons: (addOns: AddOn[]) => void,
    addOns: AddOn[],
    buttonDisabled: boolean,
    setButtonDisabled: (val: boolean) => void,
    checkedIndexes: number[],
    setCheckedIndexes: (val: number[]) => void
}

export const AddOnContext = createContext<AddOnContextType>({
    setAddons: (addOns: AddOn[]) => { },
    addOns: [],
    buttonDisabled: false,
    setButtonDisabled: (val: boolean) => { },
    checkedIndexes: [],
    setCheckedIndexes: (val: number[]) => { }
});