import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import ExpenseForm from "./ExpenseForm";
import { Button } from "../ui/button";
import { BiPlus } from "react-icons/bi";

export default function ExpenseDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild aria-label="add expense">
        <Button variant={"ghost"}>
          <BiPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="bottom-0 left-1/2 -translate-x-1/2 -translate-y-0 rounded-t-xl md:bottom-auto md:top-1/4">
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Add one of your monthly expenses and give it a name, category, and
          dollar amount.
        </DialogDescription>
        <ExpenseForm />
      </DialogContent>
    </Dialog>
  );
}
