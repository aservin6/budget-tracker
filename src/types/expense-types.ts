export type Expense = {
  id: string;
  name: string;
  amount: number | undefined;
  selected: boolean;
  color: string;
};

export type ExpenseList = Expense[];
