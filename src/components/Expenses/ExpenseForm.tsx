import { FormEvent, useContext, useState } from "react";
import { ExpensesContext } from "../../context/expenses-context";
import { v4 as uuidv4 } from "uuid";
import { ModalContext } from "../../context/modal-context";
import { Expense } from "../../types/expense-types";

export default function ExpenseForm() {
  const { addExpense } = useContext(ExpensesContext);
  const { closeModal } = useContext(ModalContext);
  const id = uuidv4();

  const generateColor = () => {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };

  const [formData, setFormData] = useState<Expense>({
    id: id,
    name: "",
    amount: undefined,
    selected: false,
    color: generateColor(),
  });

  const handleInputChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === "name") {
      setFormData({ ...formData, [name]: value });
    } else if (name === "amount") {
      setFormData({
        ...formData,
        [name]: parseFloat(value),
      });
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    addExpense(formData);
    closeModal();
  };

  return (
    <div className="mb-2 mt-5 text-sm">
      <form onSubmit={handleFormSubmit} className="space-y-5">
        <div>
          <label htmlFor="expenseName">Expense Name</label>
          <input
            onChange={handleInputChange}
            id="expenseName"
            type="text"
            name="name"
            defaultValue={formData.name}
            className="mt-0.5 w-full rounded-md p-1 text-zinc-800 outline-none"
            placeholder="Rent"
            required
          />
        </div>
        <div>
          <label htmlFor="dollarAmount">Dollar Amount ($)</label>
          <input
            onChange={handleInputChange}
            id="dollarAmount"
            type="number"
            name="amount"
            defaultValue={formData.amount}
            className="mt-0.5 w-full rounded-md p-1 text-zinc-800 outline-none"
            placeholder="$1500"
            step={0.01}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 py-2 text-zinc-200 transition-all duration-300 hover:bg-opacity-75"
        >
          Add
        </button>
      </form>
    </div>
  );
}
