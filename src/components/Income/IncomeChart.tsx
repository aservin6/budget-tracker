import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useContext } from "react";
import { ExpensesContext } from "@/context/expenses-context";

export default function IncomeChart() {
  const { userIncome } = useContext(ExpensesContext);

  return (
    <div className="relative w-1/2">
      <div className="absolute flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-sm">Monthly Income</span>
          <span className="text-xl font-extrabold">
            ${userIncome?.toLocaleString()}
          </span>
        </div>
      </div>
      <Doughnut
        data={{
          datasets: [
            {
              data: [userIncome],
              backgroundColor: "#72FFAA",
              borderWidth: 1,

              borderColor: "hsl(219 20% 25%)",
            },
          ],
        }}
        options={{
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
          },
          responsive: true,
          cutout: "80%",
        }}
      />
    </div>
  );
}
