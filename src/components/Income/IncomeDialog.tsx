import { ExpensesContext } from "../../context/expenses-context";
import { useContext } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { BiPlus } from "react-icons/bi";
import IncomeForm from "./IncomeForm";
import { Button } from "../ui/button";

export default function IncomeDialog() {
  const { userIncome, expenses } = useContext(ExpensesContext);

  return (
    <Dialog>
      <DialogTrigger
        asChild
        aria-label="adjust income"
        className="hover:text-muted-foreground hover:underline"
      >
        {userIncome && userIncome > 0 ? (
          <Button variant="link" className="text-sm text-foreground">
            {expenses.length > 0
              ? "Adjust Income"
              : `$${userIncome.toFixed(2)}`}
          </Button>
        ) : (
          <Button variant="ghost">
            <BiPlus />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="h-screen max-w-full sm:h-auto sm:max-w-lg">
        <div className="relative top-12 flex max-w-lg flex-col space-y-5 sm:top-0 sm:block">
          <DialogHeader className="text-left">
            <DialogTitle>Adjust Income</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Add your monthly income to calculate your budget.
          </DialogDescription>
          <IncomeForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
