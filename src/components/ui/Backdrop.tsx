import ReactDOM from "react-dom";
import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";

export default function Backdrop() {
  const { closeModal } = useContext(ModalContext);

  return ReactDOM.createPortal(
    <div
      onClick={closeModal}
      className="fixed left-0 top-0 z-10 flex min-h-screen min-w-full items-center justify-center bg-black bg-opacity-70"
    ></div>,
    document.getElementById("portal") as HTMLElement,
  );
}
