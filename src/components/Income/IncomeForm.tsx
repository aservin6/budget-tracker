import { ExpensesContext } from "../../context/expenses-context";
import { useContext, useState } from "react";
import { FormEvent } from "react";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function IncomeForm() {
  const { saveIncome } = useContext(ExpensesContext);
  const [userInput, setUserInput] = useState(0);

  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setUserInput(parseFloat(value));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveIncome(userInput);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col justify-end space-y-3 md:mt-10"
    >
      <Label htmlFor="income">Monthly Income (take home)</Label>
      <Input
        onChange={handleChange}
        name="income"
        type="number"
        step={0.01}
        placeholder={"4,250.00"}
        defaultValue={undefined}
      />
      <DialogClose asChild>
        <Button type="submit">Save</Button>
      </DialogClose>
    </form>
  );
}
