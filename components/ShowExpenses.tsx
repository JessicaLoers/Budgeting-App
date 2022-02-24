import Expense from "../types/Expense";
import { currencyFormatter } from "../lib/budgetCardFunctions";

interface Props {
  expenses: Expense[];
  handleDelete?: Function;
}

function ShowExpenses({ expenses, handleDelete }: Props) {
  const getDate = (expenseId: number) => {
    const idToDate = new Date(expenseId);
    const expenseDate = idToDate.toLocaleDateString();
    return expenseDate;
  };

  return (
    <>
      <h3>Expenses</h3>
      <ul className="mt-4">
        {expenses.map((expense) => (
          <li key={expense.id} className="flex w-full ">
            <span>{getDate(expense.id)}</span>
            <span className="basis-4/6 ml-4">{expense.title}</span>
            <span className="basis-2/6 text-right mr-4 ">
              {currencyFormatter.format(Number(expense.expense))}
            </span>
            {handleDelete && (
              <button
                onClick={() => handleDelete(expense.id)}
                className="basis-1/6"
              >
                X
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ShowExpenses;
