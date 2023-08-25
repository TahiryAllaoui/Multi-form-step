import { createContext } from "react";

interface StepType {
    stepId: number;
    setStepId: (n: number) => void;
}

const Step = createContext<StepType | null>(null);

export { Step };
export type { StepType };