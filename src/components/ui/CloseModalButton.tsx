import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
import { BiX } from "react-icons/bi";

export default function CloseModalButton() {
  const { closeModal } = useContext(ModalContext);
  return (
    <button
      onClick={closeModal}
      className="flex justify-end rounded-lg bg-opacity-0 p-1 transition-all duration-300 hover:bg-zinc-600 hover:bg-opacity-100"
    >
      <BiX />
    </button>
  );
}
