import { ExpenseList, Expense } from "../types/expense-types";
import { useState, useMemo, createContext, ReactNode, useEffect } from "react";
import { expensesInitialValues } from "./initial-values";

interface ExpensesContext {
  expenses: ExpenseList;
  setExpenses: (expenses: ExpenseList) => void;
  addExpense: (expense: Expense) => void;
  toggleSelectExpense: (expense: Expense) => void;
  resetSelectedExpenses: () => void;
  deleteSelectedExpenses: () => void;
  selectedExpenses: number;
  totalCostOfExpenses: number;
  editMode: boolean;
  toggleEditMode: () => void;
  userIncome: number | null;
  saveIncome: (input: number | null) => void;
}

export const ExpensesContext = createContext<ExpensesContext>(
  expensesInitialValues,
);

const ExpensesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [expenses, setExpenses] = useState<ExpenseList>([]);
  const [userIncome, setUserIncome] = useState<number | null>(null);
  const [editMode, setEditMode] = useState(false);

  const addExpense = (expense: Expense) => {
    setExpenses([expense, ...expenses]);
    localStorage.setItem("expenses", JSON.stringify([expense, ...expenses]));
  };

  const toggleSelectExpense = (expense: Expense) => {
    const arr = expenses.map((obj) => {
      if (obj.id === expense.id) {
        return { ...obj, selected: !expense.selected };
      } else {
        return obj;
      }
    });
    setExpenses(arr);
  };

  const resetSelectedExpenses = () => {
    const arr = expenses.map((obj) => {
      if (obj.selected === true) {
        return { ...obj, selected: false };
      } else {
        return obj;
      }
    });
    setExpenses(arr);
  };

  const deleteSelectedExpenses = () => {
    const arr = expenses.filter((obj) => obj.selected !== true);
    setExpenses(arr);
    localStorage.setItem("expenses", JSON.stringify(arr));
  };

  const saveIncome = (input: number | null) => {
    setUserIncome(input);
    localStorage.setItem("userIncome", JSON.stringify(input));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const selectedExpenses = useMemo(() => {
    const count = expenses.reduce((counter, exp) => {
      if (exp.selected === true) counter += 1;
      return counter;
    }, 0);
    return count;
  }, [expenses]);

  const totalCostOfExpenses = useMemo(() => {
    const count = expenses.reduce((counter, exp) => {
      if (exp.amount) counter += exp.amount;
      return counter;
    }, 0);
    return count;
  }, [expenses]);

  // Retrieve local storage
  useEffect(() => {
    const localExpenses: ExpenseList = JSON.parse(
      localStorage.getItem("expenses") as string,
    );
    const localUserIncome = JSON.parse(
      localStorage.getItem("userIncome") as string,
    );
    if (localExpenses && localUserIncome) {
      setExpenses(localExpenses);
      setUserIncome(localUserIncome);
    } else {
      return;
    }
  }, []);

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        setExpenses,
        addExpense,
        toggleSelectExpense,
        resetSelectedExpenses,
        deleteSelectedExpenses,
        selectedExpenses,
        totalCostOfExpenses,
        editMode,
        toggleEditMode,
        userIncome,
        saveIncome,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesProvider;
