import { ExpensesContext } from "../../context/expenses-context";
import { useContext } from "react";
import { BiEditAlt } from "react-icons/bi";
import { Button } from "./button";

export default function EditModeButton() {
  const { toggleEditMode, resetSelectedExpenses } = useContext(ExpensesContext);

  const handleClick = () => {
    toggleEditMode();
    resetSelectedExpenses();
  };

  return (
    <Button
      variant={"ghost"}
      onClick={handleClick}
      aria-label="toggle edit mode"
      className={`flex items-center space-x-1`}
    >
      <span>
        <BiEditAlt />
      </span>
      <span>Edit</span>
    </Button>
  );
}
