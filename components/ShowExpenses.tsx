import { currencyFormatter } from "../lib/numberFormatter";
import BudgetStateInterface from "../types/BudgetStateInterface";
import Expense from "../types/Expense";
import BudgetCard from "./BudgetCard";

interface Props {
  expenses: Expense[];
  budgets: BudgetStateInterface[];
  handleBudgetsChange: Function;
  budgetCategory: string;
}

function ShowExpenses({
  expenses,
  budgets,
  handleBudgetsChange,
  budgetCategory,
}: Props) {
  function handleDelete(expenseId: number) {
    const updatedBudgets = budgets.map((budget) => {
      if (budget.category === budgetCategory) {
        const updatedExpenses = expenses.filter(
          (expense) => expense.id !== expenseId
        );
        budget.individualExpenses = updatedExpenses;
      }
      return budget;
    });
    handleBudgetsChange(updatedBudgets);
  }

  return (
    <>
      <ul className="mt-4">
        {expenses.map((expense) => (
          <li className="flex w-full ">
            <p className="basis-4/6  ">{expense.title}</p>
            <span className="basis-1/6 text-right ">
              {currencyFormatter.format(Number(expense.expense))}
            </span>
            <button
              onClick={() => handleDelete(expense.id)}
              className="basis-1/6"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShowExpenses;
