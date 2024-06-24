// Supports weights 300-900
import "@fontsource-variable/figtree";
import Income from "./components/Income/Income";
import ExpenseList from "./components/Expenses/ExpenseList";
import { useContext } from "react";
import ExpenseModal from "./components/Expenses/ExpenseModal";
import { ModalContext } from "./context/modal-context";
import IncomeModal from "./components/Income/IncomeModal";
import Backdrop from "./components/ui/Backdrop";

export default function App() {
  const { modalOpen, modalType } = useContext(ModalContext);

  return (
    <>
      <main className="min-h-screen bg-zinc-200 font-figtree font-semibold text-zinc-800">
        <div className="mx-auto w-5/6 max-w-2xl py-6 lg:w-2/3">
          <header className="mb-6 w-full text-3xl font-black tracking-normal">
            Budget Tracker
          </header>
          {/* Dashboard Section */}
          <section id="dashboard">
            <h2 className="mb-2 text-xl">Dashboard</h2>
            <div className="space-y-2 text-lg">
              <Income />
              <ExpenseList />
            </div>
          </section>
        </div>
        {modalOpen && modalType === "expense" && <ExpenseModal />}
        {modalOpen && modalType === "income" && <IncomeModal />}
        {modalOpen && <Backdrop />}
      </main>
    </>
  );
}
