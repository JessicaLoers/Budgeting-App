import { MouseEvent, useState } from "react";
import BudgetStateInterface from "../types/BudgetStateInterface";
import Button from "./Button";
import { currencyFormatter } from "../lib/numberFormatter";
import ShowExpenses from "./ShowExpenses";
interface Props {
  onShowAddExpense: (event: MouseEvent, budgetName: string) => void;
  categoryBudget: BudgetStateInterface;
}

function BudgetCard({ onShowAddExpense, categoryBudget }: Props) {
  const [showExpenses, setShowExpenses] = useState<boolean>(false);

  function onShowExpenses() {
    setShowExpenses(!showExpenses);
  }

  return (
    <div className="rounded-2xl p-4 shadow-xl ring-1 mt-12 transition-[height] duration-1000 ease-in  ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">{categoryBudget.category}</h2>
        <div>
          <span className="text-2xl">
            {currencyFormatter.format(
              Number(
                categoryBudget.individualExpenses.reduce(
                  (a, b) => a + b.expense,
                  0
                )
              )
            )}
          </span>
          <span className="text-2xl">
            / {currencyFormatter.format(Number(categoryBudget.budget))}
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
        <Button
          primary
          onClick={(event) => onShowAddExpense(event, categoryBudget.category)}
        >
          Add expense
        </Button>
        <Button onClick={onShowExpenses}>View expense</Button>
      </div>
      {showExpenses && (
        <ShowExpenses expenses={categoryBudget.individualExpenses} />
      )}
    </div>
  );
}

export default BudgetCard;
