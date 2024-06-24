import Container from "../ui/Container";
import { useContext } from "react";
import { ExpensesContext } from "../../context/expenses-context";
import AdjustIncomeButton from "./AdjustIncomeButton";
import IncomeBreakdown from "./IncomeBreakdown";
import ExpenseChart from "../Chart/ExpenseChart";

export default function Income() {
  const { userIncome, expenses } = useContext(ExpensesContext);

  return (
    <Container>
      {userIncome ? (
        <>
          <div className="mb-6 flex items-center justify-between">
            <header className="text-xl font-extrabold text-zinc-200">
              Net Income
            </header>
            <AdjustIncomeButton />
          </div>
          <div className="flex flex-col space-y-3 md:flex-row md:justify-between md:space-y-0">
            <IncomeBreakdown />
            {expenses.length > 0 && (
              <div className="self-center p-3">
                <ExpenseChart />
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-between">
          <p>Add your monthly income to calculate your budget!</p>
          <AdjustIncomeButton />
        </div>
      )}
    </Container>
  );
}
