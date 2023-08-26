import { createContext } from "react";

interface IdentityType {
    name: string;
    mail: string;
    number: string;
    setName: (s: string) => void;
    setMail: (s: string) => void;
    setNumber: (s: string) => void;
    buttonDisableInfo: boolean,
    setButtonDisableInfo: (val: boolean) => void
}

const Identity = createContext<IdentityType>({
    name: '',
    mail: '',
    number: '',
    setName: (s: string) => { },
    setMail: (s: string) => { },
    setNumber: (s: string) => { },
    buttonDisableInfo: true,
    setButtonDisableInfo: (val: boolean) => { }
});

export { Identity };
export type { IdentityType }
