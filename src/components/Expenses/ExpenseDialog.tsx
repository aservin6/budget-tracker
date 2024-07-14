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
      <DialogContent className="left-1/2 top-0 h-screen -translate-x-1/2 -translate-y-0 md:bottom-auto md:top-1/4">
        <div className="relative top-24 flex flex-col space-y-5">
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
