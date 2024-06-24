import { useContext } from "react";
import { Expense } from "../../types/expense-types";
import { ExpensesContext } from "../../context/expenses-context";
import { BiSolidGrid } from "react-icons/bi";
import { FormEvent } from "react";

interface ExpenseItemProps {
  expense: Expense;
}

export default function ExpenseItem({ expense }: ExpenseItemProps) {
  const { editMode, toggleSelectExpense, saveColor } =
    useContext(ExpensesContext);

  const handleColorChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    saveColor(expense, value);
  };

  return (
    <div className="border-y border-zinc-600">
      <label className="flex min-h-10 items-center space-x-2">
        <div className="w-5">
          {editMode && (
            <input
              onChange={() => toggleSelectExpense(expense)}
              type="checkbox"
              className=""
            ></input>
          )}
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full justify-between">
            <p className="flex items-center space-x-3">
              <span>{expense.name}</span>
              {editMode ? (
                <input
                  onChange={handleColorChange}
                  type="color"
                  className="h-4 w-4"
                  defaultValue={expense.color}
                />
              ) : (
                <span
                  className="h-4 w-4"
                  style={{ backgroundColor: expense.color }}
                ></span>
              )}
            </p>
            <p className="ml-auto">${expense.amount?.toLocaleString()}</p>
          </div>
        </div>
        <div className="w-10">
          {editMode && (
            <div className="p-1 text-2xl text-zinc-200 opacity-25">
              <BiSolidGrid />
            </div>
          )}
        </div>
      </label>
    </div>
  );
}
