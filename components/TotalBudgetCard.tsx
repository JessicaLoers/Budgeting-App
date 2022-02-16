import Button from './Button';

function TotalBudgetCard() {
  return (
    <div className="container rounded-2xl p-4 shadow-xl ring-1">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Total Budget</h2>
        <div>
          <span className="text-2xl">$200</span>/ $1000
        </div>
      </div>
      <div className="w-full bg-violet-200 rounded-full h-4 my-8">
        <div
          className="bg-violet-500 h-4 rounded-full"
          style={{ width: '45%' }}
        ></div>
      </div>
      <div className="flex justify-end items-center">
        <Button primary>Add expense</Button>
        <Button>View expense</Button>
      </div>
    </div>
  );
}

export default TotalBudgetCard;
