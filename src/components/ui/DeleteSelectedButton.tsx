import { useContext } from "react";
import { ExpensesContext } from "../../context/expenses-context";
import { Button } from "./button";

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
        <Button
          onClick={handleClick}
          variant={"outline"}
          className="border-destructive text-destructive hover:bg-destructive"
          aria-label="delete selected expenses"
        >
          Delete Selected ({selectedExpenses ? selectedExpenses : 0})
        </Button>
      ) : (
        <Button
          variant={"outline"}
          className="border-destructive text-destructive"
          disabled
        >
          Delete Selected ({selectedExpenses ? selectedExpenses : 0})
        </Button>
      )}
    </>
  );
}
