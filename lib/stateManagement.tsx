import { useState } from 'react'

function stateManagement() {
  const initialStorage = [
    {
      individualExpenses: [
        { title: 'Kino', date: '14.02.2022', expense: 38 },
        { title: 'Apassionata', date: '03.10.2021', expense: 68 },
      ],
      category: 'Entertainment',
      budget: 1000,
      overSpend: false,
    },
    {
      individualExpenses: [
        { title: 'Spaghetti', date: '14.02.2022', expense: 16 },
        { title: 'Pommes', date: '15.02.2022', expense: 5 },
        { title: 'Ramen', date: '15.02.2022', expense: 18 },
      ],
      category: 'Food',
      budget: 1000,
      overSpend: false,
    },
  ]
  const [storage, setStorage] = useState(initialStorage)
  return { state: storage, setState: setStorage }
}

export default stateManagement
