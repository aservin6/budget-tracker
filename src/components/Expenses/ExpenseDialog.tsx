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
      <DialogContent className="h-screen max-w-full sm:h-auto sm:max-w-lg">
        <div className="relative top-12 flex max-w-lg flex-col space-y-5 sm:top-0 sm:block">
          <DialogHeader className="text-left">
            <DialogTitle>Add Expense</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Add one of your monthly expenses and give it a name, category, and
            dollar amount.
          </DialogDescription>
          <ExpenseForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
