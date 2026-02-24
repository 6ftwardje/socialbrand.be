"use client";

interface StepContainerProps {
  children: React.ReactNode;
  stepIndex: number;
}

export default function StepContainer({ children, stepIndex }: StepContainerProps) {
  return (
    <div key={stepIndex} className="w-full max-w-xl animate-step-in">
      {children}
    </div>
  );
}
