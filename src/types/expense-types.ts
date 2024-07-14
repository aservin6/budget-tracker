export type Expense = {
  id: string;
  name: string;
  category: string;
  amount: number | undefined;
  selected: boolean;
  color: string;
};

export type ExpenseList = Expense[];

export type ChartDataObject =
  | {
      category: string;
      amount: number | undefined;
    }
  | undefined;

export type ChartData = ChartDataObject[];
