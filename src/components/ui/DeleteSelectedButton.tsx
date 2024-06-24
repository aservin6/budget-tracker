import { useContext } from "react";
import { ExpensesContext } from "../../context/expenses-context";

export default function DeleteSelectedButton() {
  const { deleteSelectedExpenses, selectedExpenses, toggleEditMode } =
    useContext(ExpensesContext);

  const handleClick = () => {
    toggleEditMode();
    deleteSelectedExpenses();
  };

  return (
    <>
      {selectedExpenses > 0 ? (
        <button
          onClick={handleClick}
          className={`border-1 active: rounded-md border border-red-500 bg-zinc-800 px-2 py-1 text-sm font-semibold text-red-500        `}
        >
          Delete Selected ({selectedExpenses ? selectedExpenses : 0})
        </button>
      ) : (
        <button
          className={`rounded-md bg-zinc-800 px-2 py-1 text-sm font-semibold text-red-500 opacity-50 outline outline-1 outline-red-500`}
          disabled
        >
          Delete Selected ({selectedExpenses ? selectedExpenses : 0})
        </button>
      )}
    </>
  );
}
