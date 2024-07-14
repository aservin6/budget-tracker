import { Card, CardContent, CardTitle, CardHeader } from "../ui/card";
import BreakdownChart from "./BreakdownChart";
import { useContext } from "react";
import { ExpensesContext } from "@/context/expenses-context";

export default function Breakdown() {
  const { expenses, userIncome } = useContext(ExpensesContext);

  return (
    <>
      {expenses.length > 0 && userIncome ? (
        <Card className="">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <BreakdownChart />
          </CardContent>
        </Card>
      ) : null}
    </>
  );
}
