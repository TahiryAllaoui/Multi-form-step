import { createContext } from "react";

interface StepType {
    stepId: number | null;
    setStepId: (n: number | null) => void;
}

const Step = createContext<StepType | null>(null);

export { Step };
export type { StepType };