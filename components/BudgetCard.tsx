import { MouseEvent, useEffect, useRef, useState } from "react";
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
  const [expensesReady, setExpensesReady] = useState<boolean>(false);

  // Create a DOM reference to the BudgetCard
  const budgetCardContainer = useRef<HTMLDivElement>(null);

  // This effects watches closely the showExpense state.
  // It registers two event listeners, one for when the CSS transition starts
  // and one for when it finishes.
  // The new state 'expensesReady' will the be set to either true or false when
  // the budget container is fully expanded (see line 79).
  useEffect(() => {
    if (budgetCardContainer && budgetCardContainer.current) {
      budgetCardContainer.current!.ontransitionstart = () => {
        setExpensesReady(false);
      };
      budgetCardContainer.current!.ontransitionend = () => {
        setExpensesReady(showExpenses);
      };
    }
  }, [showExpenses]);

  function onShowExpenses() {
    setShowExpenses(!showExpenses);
  }

  return (
    <div
      className={`rounded-2xl p-4 shadow-xl ring-1 mt-12 transition-[height] duration-250 ease-in-out ${
        showExpenses ? "h-[24rem]" : "h-56"
      }`}
      ref={budgetCardContainer}
    >
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
      {/* Expenses are shown once the transition is completed */}
      {expensesReady && (
        <ShowExpenses expenses={categoryBudget.individualExpenses} />
      )}
    </div>
  );
}

export default BudgetCard;
