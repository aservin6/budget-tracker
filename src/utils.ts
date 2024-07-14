import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categories = [
  { category: "housing", text: "Housing" },
  { category: "utilities", text: "Utilities" },
  { category: "internet", text: "Internet / Phone" },
  { category: "essentials", text: "Essentials" },
  { category: "groceries", text: "Groceries / Food" },
  { category: "insurance", text: "Insurance" },
  { category: "debt", text: "Debt" },
  { category: "transportation", text: "Transportation" },
  { category: "entertainment", text: "Entertainment" },
  { category: "savings", text: "Savings" },
  { category: "taxes", text: "Taxes" },
  { category: "other", text: "Other" },
];

export const categoryColors = [
  "hsl(360, 75%, 62%)",
  "hsl(30, 75%, 62%)",
  "hsl(60, 75%, 62%)",
  "hsl(90, 75%, 62%)",
  "hsl(120, 75%, 62%)",
  "hsl(150, 75%, 62%)",
  "hsl(180, 75%, 62%)",
  "hsl(210, 75%, 62%)",
  "hsl(240, 75%, 62%)",
  "hsl(270, 75%, 62%)",
  "hsl(300, 75%, 62%)",
  "hsl(330, 75%, 62%)",
];
