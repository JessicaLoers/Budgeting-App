import { MouseEventHandler, useState } from "react";
import { currencyFormatter } from "../lib/numberFormatter";
import Expense from "../types/Expense";
import Button from "./Button";
import ShowExpenses from "./ShowExpenses";

interface Props {
  onShowAddExpense: MouseEventHandler;
  uncategorized: Expense[];
  onHandleUncategorizedDelete: Function;
}

function UncategorizedBudgetCard({
  onShowAddExpense,
  uncategorized,
  onHandleUncategorizedDelete,
}: Props) {
  const [showExpenses, setShowExpenses] = useState<boolean>(false);
  function onShowExpenses() {
    setShowExpenses(!showExpenses);
  }

  return (
    <div className="rounded-2xl p-4 shadow-xl ring-1 mt-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Uncategorized</h2>
        <div>
          <span className="text-2xl">
            {currencyFormatter.format(
              Number(uncategorized.reduce((a, b) => a + b.expense, 0))
            )}
          </span>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <Button primary onClick={onShowAddExpense}>
          Add expense
        </Button>
        <Button onClick={onShowExpenses}>View expense</Button>
      </div>
      {showExpenses && (
        <ShowExpenses
          expenses={uncategorized}
          handleUncategorizedExpenseDelete={onHandleUncategorizedDelete}
        />
      )}
    </div>
  );
}

export default UncategorizedBudgetCard;
