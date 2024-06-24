import { ReactNode } from "react";

interface containerProps {
  children?: ReactNode;
  customWidth?: string;
}

export default function Container({ children, customWidth }: containerProps) {
  return (
    <div
      className={`rounded-xl bg-zinc-800 px-4 py-2 text-zinc-200 ${customWidth}`}
    >
      {children}
    </div>
  );
}
