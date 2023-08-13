import { useContext, createContext } from "react";

export interface IdentityType {
    name: string;
    mail: string;
    number: string;
}

const Identity = createContext<IdentityType | null>(null);

export default Identity;
