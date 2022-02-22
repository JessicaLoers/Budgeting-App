import { currencyFormatter } from "../lib/numberFormatter";
import BudgetStateInterface from "../types/BudgetStateInterface";
import Expense from "../types/Expense";

interface Props {
  expenses: Expense[];
  budgets?: BudgetStateInterface[];
  handleBudgetsChange?: Function;
  budgetCategory?: string;
  handleUncategorizedExpenseDelete?: Function;
}

function ShowExpenses({
  expenses,
  budgets,
  handleBudgetsChange,
  budgetCategory,
  handleUncategorizedExpenseDelete,
}: Props) {
  function handleDelete(expenseId: number) {
    if (budgets) {
      const updatedBudgets = budgets.map((budget) => {
        if (budget.category === budgetCategory) {
          const updatedExpenses = expenses.filter(
            (expense) => expense.id !== expenseId
          );
          budget.individualExpenses = updatedExpenses;
        }
        return budget;
      });
      handleBudgetsChange && handleBudgetsChange(updatedBudgets);
    }
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
              onClick={() => {
                handleUncategorizedExpenseDelete
                  ? handleUncategorizedExpenseDelete(expense.id)
                  : handleDelete(expense.id);
              }}
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
