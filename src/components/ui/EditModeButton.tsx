import { ExpensesContext } from "../../context/expenses-context";
import { useContext } from "react";
import { BiEditAlt } from "react-icons/bi";

export default function EditModeButton() {
  const { editMode, toggleEditMode, resetSelectedExpenses } =
    useContext(ExpensesContext);

  const handleClick = () => {
    toggleEditMode();
    resetSelectedExpenses();
  };

  return (
    <button
      onClick={handleClick}
      className={`hover:bg-opacity-100" flex items-center space-x-1 rounded-lg bg-opacity-0 px-2 py-1 text-sm transition-all duration-300 hover:bg-zinc-600 ${editMode && "bg-zinc-200 bg-opacity-100 text-zinc-800"}`}
    >
      <span>
        <BiEditAlt />
      </span>
      <span>Edit</span>
    </button>
  );
}
