import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
import { BiPlus } from "react-icons/bi";

export default function AddExpenseButton() {
  const { handleModal } = useContext(ModalContext);

  return (
    <button
      onClick={() => handleModal("expense")}
      className="rounded-lg bg-opacity-0 p-1 transition-all duration-300 hover:bg-zinc-600 hover:bg-opacity-100"
      aria-label="add expense"
    >
      <BiPlus />
    </button>
  );
}
