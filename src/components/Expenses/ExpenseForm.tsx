import { FormEvent, useContext, useState } from "react";
import { ExpensesContext } from "../../context/expenses-context";
import { v4 as uuidv4 } from "uuid";
import { Expense } from "../../types/expense-types";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DialogClose } from "../ui/dialog";
import ExpenseCategorySelect from "./ExpenseCategorySelect";

export default function ExpenseForm() {
  const { addExpense } = useContext(ExpensesContext);
  const id = uuidv4();

  const generateColor = () => {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };

  const [formData, setFormData] = useState<Expense>({
    id: id,
    name: "",
    category: "",
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

  const handleSelectChange = (category: string) => {
    setFormData({ ...formData, category });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    addExpense(formData);
  };

  return (
    <div className="">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <Label htmlFor="expenseName">Expense Name</Label>
          <Input
            onChange={handleInputChange}
            id="expenseName"
            type="text"
            name="name"
            defaultValue={formData.name}
            className="w-full"
            placeholder="Rent"
            required
          />
        </div>
        <div>
          <Label htmlFor="categoryName">Category</Label>
          <ExpenseCategorySelect onSelectChange={handleSelectChange} />
        </div>
        <div>
          <label htmlFor="dollarAmount">Dollar Amount ($)</label>
          <Input
            onChange={handleInputChange}
            id="dollarAmount"
            type="number"
            name="amount"
            defaultValue={formData.amount}
            className="w-[180px]"
            placeholder="$1500"
            step={0.01}
            required
          />
        </div>
        <DialogClose asChild>
          <Button type="submit" className="w-full">
            Add
          </Button>
        </DialogClose>
      </form>
    </div>
  );
}
