import { useContext } from "react";
import { ExpensesContext } from "../../context/expenses-context";
import IncomeDialog from "./IncomeDialog";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import IncomeChart from "./IncomeChart";

export default function Income() {
  const { userIncome } = useContext(ExpensesContext);

  return (
    <>
      {userIncome && userIncome > 0 ? (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Income</CardTitle>
            <IncomeDialog />
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <IncomeChart />
          </CardContent>
        </Card>
      ) : null}
    </>
  );
}
