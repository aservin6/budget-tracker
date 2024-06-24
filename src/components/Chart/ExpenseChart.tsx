import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../../context/expenses-context";

export default function ExpenseChart() {
  const { expenses } = useContext(ExpensesContext);
  const [chartLabels, setChartLabels] = useState<string[]>([]);
  const [chartValues, setChartValues] = useState<(number | undefined)[]>([]);

  useEffect(() => {
    const labelArr = expenses.map((obj) => {
      return obj.name;
    });
    setChartLabels(labelArr);

    const valueArr = expenses.map((obj) => {
      return obj.amount;
    });
    setChartValues(valueArr);
  }, [expenses]);

  return (
    expenses.length > 0 && (
      <Pie
        data={{
          labels: chartLabels,
          datasets: [
            {
              data: chartValues,
              backgroundColor: expenses.map((obj) => {
                return obj.color;
              }),
              borderWidth: 1,
              borderColor: "#27272a",
            },
          ],
        }}
        options={{
          plugins: {
            legend: { display: false },
          },
        }}
      />
    )
  );
}
