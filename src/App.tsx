// Supports weights 300-900
import "@fontsource-variable/figtree";
import Income from "./components/Income/Income";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import Expenses from "./components/Expenses/Expenses";
import Breakdown from "./components/Breakdown/Breakdown";
import { useContext } from "react";
import { ExpensesContext } from "./context/expenses-context";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";
import IncomeDialog from "./components/Income/IncomeDialog";
import ExpenseDialog from "./components/Expenses/ExpenseDialog";

export default function App() {
  const { userIncome, expenses } = useContext(ExpensesContext);
  return (
    <>
      <main className="min-h-screen bg-card">
        <div
          className={`mx-auto w-full px-5 py-6 ${userIncome && userIncome > 0 && expenses.length > 0 ? "sm:max-w-2xl xl:max-w-5xl" : "max-w-2xl"} `}
        >
          <ThemeToggle />
          {/* Dashboard Section */}
          <section id="dashboard">
            <h2 className="mb-10 text-xl">Dashboard</h2>
            {userIncome && userIncome > 0 && expenses.length > 0 ? (
              <div className="grid gap-5 xl:grid-cols-[1.5fr_2.5fr] xl:grid-rows-2">
                <Income />
                <Breakdown />
                <div className="row-start-1 row-end-2 xl:col-start-2 xl:-col-end-1 xl:row-start-1 xl:-row-end-1">
                  <Expenses />
                </div>
              </div>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Get started on your budget!</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p>1. Add your monthly income.</p>
                    <IncomeDialog />
                  </div>
                  <div className="flex items-center justify-between">
                    <p>2. Add your first monthly expense.</p>
                    <ExpenseDialog />
                  </div>
                </CardContent>
              </Card>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
