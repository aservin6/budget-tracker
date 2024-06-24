import { ReactNode } from "react";
import Container from "./Container";

interface wrapperProps {
  children?: ReactNode;
}

export default function ModalWrapper({ children }: wrapperProps) {
  return (
    <div className="absolute left-1/2 top-1/4 z-20 flex w-full max-w-md -translate-x-1/2 justify-center text-lg text-zinc-200">
      <Container customWidth="w-5/6 md:w-full">{children}</Container>
    </div>
  );
}
