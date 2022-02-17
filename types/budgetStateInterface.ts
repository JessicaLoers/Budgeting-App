interface budgetStateInterface {
  individualExpenses: {
    title: string;
    date: string;
    expense: number;
  }[];
  category: string;
  budget: number;
  overSpend: boolean;
}
