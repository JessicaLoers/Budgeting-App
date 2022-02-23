import { currencyFormatter } from "../lib/numberFormatter";
import Expense from "../types/Expense";

interface Props {
  expenses: Expense[];
  handleDelete?: Function;
}

function ShowExpenses({ expenses, handleDelete }: Props) {
  return (
    <>
      <h3 className="text-2xl">Expenses</h3>
      <ul className="mt-4">
        {expenses.map((expense) => (
          <li key={expense.id} className="flex w-full ">
            <p className="basis-4/6  ">{expense.title}</p>
            <span className="basis-1/6 text-right ">
              {currencyFormatter.format(Number(expense.expense))}
            </span>
            <button
              onClick={() => handleDelete && handleDelete(expense.id)}
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
