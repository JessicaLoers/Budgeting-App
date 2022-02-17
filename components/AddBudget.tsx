import { MouseEventHandler, useState } from 'react'
import Button from './Button'

interface Props {
  onCloseAddBudget: MouseEventHandler
  onHandleStateChange: Function
  state: any[]
}

function AddBudget({ onCloseAddBudget, onHandleStateChange, state }: Props) {
  const initialBudget = {
    individualExpenses: [],
    category: '',
    budget: 0,
    overSpend: false,
  }

  const handleChange = (event: any) => {
    let inputValue = event.target.value
    setNewBudget({ ...newBudget, [event.target.name]: inputValue })
    console.log(newBudget)
  }

  const [newBudget, setNewBudget] = useState(initialBudget)

  function handleSubmit() {
    onHandleStateChange([...state, newBudget])
  }

  return (
    <form>
      <div
        className='fixed inset-0 bg-black bg-opacity-25'
        onClick={onCloseAddBudget}
      ></div>
      <div className='container absolute flex justify-center align-middle top-8'>
        <div className='gap-8 relative z-20 bg-white rounded-2xl py-8 px-16 shadow-xl ring-1 flex flex-col sm:w-10/12 md:w-6/12'>
          <h2 className='text-2xl font-bold'>New Budget</h2>
          <div>
            <label htmlFor='category' className='block'>
              Name
            </label>
            <input
              id='category'
              name='category'
              value={newBudget.category}
              type='text'
              className='border-black border rounded-2xl border-solid p-1 w-full'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='budget' className='block'>
              Max Spending
            </label>
            <input
              id='budget'
              name='budget'
              value={newBudget.budget}
              type='number'
              className='border-black border rounded-2xl border-solid p-1 w-full'
              onChange={handleChange}
            />
          </div>
          <div className='flex justify-end'>
            <Button primary>Add</Button>
            <Button onClickFunction={onCloseAddBudget}>Close</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddBudget
