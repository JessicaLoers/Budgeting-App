import { MouseEventHandler } from "react";
import Button from "./Button";

interface Props {
  onCloseAddExpense: MouseEventHandler;
  onHandleStateChange: Function;
}

function AddExpense({ onCloseAddExpense, onHandleStateChange }: Props) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25"
        onClick={onCloseAddExpense}
      ></div>
      <div className="container absolute flex justify-center align-middle top-8">
        <div className="gap-8 relative z-20 bg-white rounded-2xl py-8 px-16 shadow-xl ring-1 flex flex-col sm:w-10/12 md:w-6/12">
          <h2 className="text-2xl font-bold">New Expense</h2>
          <div>
            <label className="block">Description</label>
            <input
              type="text"
              className="border-black border rounded-2xl border-solid p-1 w-full"
            />
          </div>
          <div>
            <label className="block">Amount</label>
            <input
              type="number"
              className="border-black border rounded-2xl border-solid p-1 w-full"
            />
          </div>
          <div>
            <label className="block">Budget</label>
            <select
              name="category"
              className="border-black border rounded-2xl border-solid p-2 w-full"
            >
              <option>–– Select Category ––</option>
              <option>Entertainment</option>
              <option>Food</option>
            </select>
          </div>
          <div className="flex justify-end">
            <Button primary>Add</Button>
            <Button onClick={onCloseAddExpense}>Close</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddExpense;
