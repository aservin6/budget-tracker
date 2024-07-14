import { useContext } from "react";
import { ExpensesContext } from "@/context/expenses-context";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import EditModeButton from "../ui/EditModeButton";
import ExpenseDialog from "./ExpenseDialog";
import DeleteSelectedButton from "../ui/DeleteSelectedButton";
import ExpenseTable from "./ExpenseTable";

export default function Expenses() {
  const { expenses, editMode } = useContext(ExpensesContext);

  return (
    <>
      {expenses.length > 0 ? (
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Monthly Expenses</CardTitle>
            <div className="flex items-center space-x-3">
              <EditModeButton />
              <ExpenseDialog />
            </div>
          </CardHeader>
          <CardContent className="pt-3">
            <div className="flex h-10 items-center pb-3">
              {editMode && <DeleteSelectedButton />}
            </div>
            <ExpenseTable />
          </CardContent>
        </Card>
      ) : null}
    </>
  );
}
