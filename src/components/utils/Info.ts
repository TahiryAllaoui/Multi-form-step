import { createContext } from "react";

interface IdentityType {
    name: string;
    mail: string;
    number: string;
    setName: (s: string) => void;
    setMail: (s: string) => void;
    setNumber: (s: string) => void;
}

const Identity = createContext<IdentityType | null>(null);

export { Identity };
export type { IdentityType }
