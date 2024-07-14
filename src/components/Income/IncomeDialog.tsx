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
      <DialogContent className="left-1/2 top-0 h-screen -translate-x-1/2 -translate-y-0 md:bottom-auto md:top-1/4">
        <div className="relative top-24 flex flex-col space-y-5">
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
