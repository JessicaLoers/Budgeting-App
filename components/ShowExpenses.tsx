import { currencyFormatter } from "../lib/numberFormatter";
import Expense from "../types/Expense";

interface Props {
  expenses: Expense[];
}

function ShowExpenses({ expenses }: Props) {
  return (
    <>
      <ul className="mt-4">
        {expenses.map((expense) => (
          <li className="flex w-full ">
            <p className="basis-4/6  ">{expense.title}</p>
            <span className="basis-1/6 text-right ">
              {currencyFormatter.format(Number(expense.expense))}
            </span>
            <button className="basis-1/6">X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShowExpenses;
