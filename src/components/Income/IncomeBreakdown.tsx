import { ExpensesContext } from "../../context/expenses-context";
import { useContext } from "react";

export default function IncomeBreakdown() {
  const { userIncome, totalCostOfExpenses } = useContext(ExpensesContext);
  const netIncome = userIncome! - totalCostOfExpenses;

  return (
    <>
      <div className="flex flex-col font-bold">
        <span>${userIncome?.toLocaleString()} monthly income</span>

        {totalCostOfExpenses > 0 && (
          <span>${totalCostOfExpenses.toLocaleString()} monthly expenses</span>
        )}

        {userIncome && userIncome > 0 && totalCostOfExpenses > 0 && (
          <span
            className={`mt-2 w-fit border-t-4 border-zinc-200 text-3xl font-extrabold ${netIncome < 0 ? "text-red-300" : "text-green-300"}`}
          >
            ${netIncome.toLocaleString()} leftover
          </span>
        )}
      </div>
    </>
  );
}
