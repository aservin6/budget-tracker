import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
import { ExpensesContext } from "../../context/expenses-context";
import { BiPlus } from "react-icons/bi";

export default function AdjustIncomeButton() {
  const { handleModal } = useContext(ModalContext);
  const { userIncome } = useContext(ExpensesContext);

  return (
    <>
      {userIncome ? (
        <button
          type="button"
          onClick={() => handleModal("income")}
          className="text-sm hover:text-zinc-500 hover:underline"
          aria-label="adjust income"
        >
          Adjust Income
        </button>
      ) : (
        <button
          onClick={() => handleModal("income")}
          className="rounded-lg bg-opacity-0 p-1 transition-all duration-300 hover:bg-zinc-600 hover:bg-opacity-100"
          aria-label="add income"
        >
          <BiPlus />
        </button>
      )}
    </>
  );
}
