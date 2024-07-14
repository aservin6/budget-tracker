import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../../context/expenses-context";
import { ChartData, ChartDataObject, Expense } from "@/types/expense-types";
import { categoryColors } from "@/utils";

export default function BreakdownChart() {
  const { expenses, totalCostOfExpenses, userIncome } =
    useContext(ExpensesContext);
  const [chartData, setChartData] = useState<ChartData>([]);
  const netIncome = userIncome! - totalCostOfExpenses;

  useEffect(() => {
    const result: ChartData = expenses.reduce(
      (acc: ChartData, cur: Expense) => {
        const found: ChartDataObject = acc.find(
          (obj) => obj?.category === cur.category,
        );
        if (found) {
          found.amount! += cur.amount!;
        } else {
          acc.push({ category: cur.category, amount: cur.amount });
        }
        return acc;
      },
      [],
    );
    setChartData(result);
  }, [expenses]);

  const chartLabels = chartData.map((obj) => {
    if (obj)
      return obj.category.charAt(0).toUpperCase() + obj.category.slice(1);
  });

  const chartValues = chartData.map((obj) => {
    if (obj) return obj.amount;
  });

  return (
    expenses.length > 0 && (
      <div className="relative w-1/2">
        <div className="absolute z-0 flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center">
            <span className="text-sm">Total</span>
            <span className="text-xl font-extrabold">
              ${totalCostOfExpenses.toLocaleString()}
            </span>
            <span
              className={`text-sm ${netIncome > 0 ? "text-[#72FFAA]" : "text-red-500"}`}
            >
              +${netIncome.toLocaleString()}
            </span>
          </div>
        </div>
        <Doughnut
          className="relative z-10"
          data={{
            labels: chartLabels,
            datasets: [
              {
                data: chartValues,
                backgroundColor: categoryColors.map((color) => {
                  return color;
                }),
                borderWidth: 1,
                borderColor: "hsl(219 20% 25%)",
              },
            ],
          }}
          options={{
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true },
            },
            responsive: true,
            cutout: "80%",
          }}
        />
      </div>
    )
  );
}
