import { createContext } from "react";

interface StepType {
    stepId: number | undefined;
    setStepId: (n: number | undefined) => void;
}

const Step = createContext<StepType | undefined>({
    stepId: 0,
    setStepId: (n: number | undefined) => { }
});

export { Step };
export type { StepType };