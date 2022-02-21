import { MouseEventHandler } from "react";
import Button from "./Button";
import { currencyFormatter } from "../lib/numberFormatter";
import BudgetStateInterface from "../types/BudgetStateInterface";
interface Props {
  onShowAddExpense: MouseEventHandler;
  budgets: BudgetStateInterface[];
}

function TotalBudgetCard({ onShowAddExpense, budgets }: Props) {
  const expenses = budgets.map((budget) =>
    budget.individualExpenses.reduce((a, b) => a + b.expense, 0)
  );

  const totalExpenses = expenses.reduce((a, b) => a + b, 0);

  return (
    <div className="rounded-2xl p-4 shadow-xl ring-1 mt-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Total Budget</h2>
        <div>
          <span className="text-2xl">
            {currencyFormatter.format(Number(totalExpenses))} /{" "}
          </span>
          <span className="text-2xl">
            {currencyFormatter.format(
              budgets.reduce((a, b) => a + Number(b.budget), 0)
            )}
          </span>
        </div>
      </div>
      <div className="w-full bg-violet-200 rounded-full h-4 my-8">
        <div
          className="bg-violet-500 h-4 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
      <div className="flex justify-end items-center">
        <Button primary onClick={onShowAddExpense}>
          Add expense
        </Button>
        <Button>View expense</Button>
      </div>
    </div>
  );
}

export default TotalBudgetCard;
