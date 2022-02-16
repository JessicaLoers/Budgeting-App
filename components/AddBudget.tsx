import { MouseEventHandler } from 'react';
import Button from './Button';

interface Props {
  onCloseAddBudget: MouseEventHandler;
}

function AddBudget({ onCloseAddBudget }: Props) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25"
        onClick={onCloseAddBudget}
      ></div>
      <div className="flex justify-center align-middle">
        <div className="container gap-4 relative z-20 bg-white rounded-2xl py-8 px-16 shadow-xl ring-1 flex flex-col">
          <h2 className="text-2xl font-bold">New Budget</h2>
          <label className="self-start">Name</label>
          <input
            type="text"
            className="border-black border rounded-2xl border-solid w-9/12"
          />
          <label>Max Spending</label>
          <input
            type="number"
            className="border-black border rounded-2xl border-solid w-9/12"
          />
          <div className="flex justify-end w-9/12">
            <Button primary>Add</Button>
            <Button onClickFunction={onCloseAddBudget}>Close</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBudget;
