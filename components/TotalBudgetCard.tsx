import { MouseEventHandler, useState } from "react";
import Button from "./Button";
import { currencyFormatter } from "../lib/numberFormatter";
import BudgetStateInterface from "../types/BudgetStateInterface";
import getTotalExpenses from "../lib/getTotalExpenses";
import ShowExpenses from "./ShowExpenses";
import Fade from "./Fade";

interface Props {
  onShowAddExpense: MouseEventHandler;
  budgets: BudgetStateInterface[];
}

function TotalBudgetCard({ onShowAddExpense, budgets }: Props) {
  const [showExpenses, setShowExpenses] = useState<boolean>(false);
  function onShowExpenses() {
    setShowExpenses(!showExpenses);
  }

  const expenses = budgets.map((budget) => budget.individualExpenses).flat();

  const totalExpenses = Number(
    budgets.map((budget) => getTotalExpenses(budget.individualExpenses))
  );
  console.log(totalExpenses);

  const totalBudgets = budgets.reduce((a, b) => a + Number(b.budget), 0);
  console.log(totalBudgets);

  const getWidth = () => {
    if (totalExpenses > totalBudgets) {
      return 100;
    } else if (totalBudgets > 0) {
      const result = (100 * totalExpenses) / totalBudgets;
      return result;
    } else {
      return 0;
    }
  };

  return (
    <div
      className={`rounded-2xl p-4 shadow-xl ring-1 mt-12 transition-[height] h-min duration-2000 ease-in-out ${
        showExpenses ? "h-[26rem]" : "h-[13rem]"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Total Budget</h2>
        <div>
          <span className="text-2xl">
            {currencyFormatter.format(totalExpenses)} /{" "}
          </span>
          <span className="text-2xl">
            {currencyFormatter.format(totalBudgets)}
          </span>
        </div>
      </div>
      <div className="w-full bg-violet-200 dark:bg-teal-600 rounded-full h-4 my-8">
        <div
          className="bg-violet-500 dark:bg-teal-200 h-4 rounded-full transition-[width] duration-1000 ease-in-out"
          style={{
            width: `${getWidth()}%`,
          }}
        ></div>
      </div>
      <div className="flex justify-end items-center">
        <Button primary onClick={onShowAddExpense}>
          Add expense
        </Button>
        <Button onClick={onShowExpenses}>View expense</Button>
      </div>
      <Fade show={showExpenses}>
        <ShowExpenses expenses={expenses} />
      </Fade>
    </div>
  );
}

export default TotalBudgetCard;
