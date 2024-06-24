import { useContext } from "react";
import { ExpensesContext } from "../../context/expenses-context";
import Container from "../ui/Container";
import EditModeButton from "../ui/EditModeButton";
import AddExpenseButton from "./AddExpenseButton";
import DeleteSelectedButton from "../ui/DeleteSelectedButton";
import { Reorder } from "framer-motion";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const { expenses, setExpenses, editMode } = useContext(ExpensesContext);

  return (
    <Container>
      {expenses.length > 0 ? (
        <div className="pb-5">
          <div className="flex items-center justify-between pb-1">
            <header className="text-xl font-extrabold text-zinc-200">
              Monthly Expenses
            </header>
            <div className="flex items-center space-x-4">
              <EditModeButton />
              <AddExpenseButton />
            </div>
          </div>
          <div className="flex h-10 items-center">
            {editMode && <DeleteSelectedButton />}
          </div>
          <div className="border-y border-zinc-600">
            <Reorder.Group values={expenses} onReorder={setExpenses}>
              {expenses.map((exp) => (
                <Reorder.Item key={exp.id} value={exp} dragListener={editMode}>
                  <ExpenseItem expense={exp} />
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <p>Add your first expense!</p>
          <AddExpenseButton />
        </div>
      )}
    </Container>
  );
}
