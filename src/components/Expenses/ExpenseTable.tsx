import { useContext } from "react";
import { ExpensesContext } from "../../context/expenses-context";
import { Reorder } from "framer-motion";
import {
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ExpenseList } from "@/types/expense-types";

export default function ExpenseTable() {
  const { expenses, editMode, toggleSelectExpense, setExpenses } =
    useContext(ExpensesContext);

  const handleReorder = (newOrder: ExpenseList) => {
    setExpenses(newOrder);
    localStorage.setItem("expenses", JSON.stringify(newOrder));
  };

  return (
    <ScrollArea className="lg:h-96">
      <Reorder.Group values={expenses} onReorder={handleReorder}>
        <Table className="text-sm">
          <TableCaption>A list of your monthly expenses.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className=""></TableHead>
              <TableHead className="md:w-52 lg:w-32">Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((exp) => {
              return (
                <Reorder.Item
                  as="tr"
                  className="h-16 border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  key={exp.id}
                  value={exp}
                  dragListener={editMode}
                >
                  <TableCell>
                    {editMode && (
                      <Checkbox
                        className="rounded"
                        onCheckedChange={() => toggleSelectExpense(exp)}
                      />
                    )}
                  </TableCell>
                  <TableCell className="font-medium md:whitespace-nowrap">
                    {exp.name}
                  </TableCell>
                  <TableCell>
                    {exp.category.charAt(0).toUpperCase() +
                      exp.category.slice(1)}
                  </TableCell>
                  <TableCell className="text-right">
                    ${exp.amount?.toFixed(2)}
                  </TableCell>
                </Reorder.Item>
              );
            })}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </Reorder.Group>
    </ScrollArea>
  );
}
