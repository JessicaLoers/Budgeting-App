import { useState } from "react";

function stateManagement() {
  const initialStorage = [
    {
      individualExpenses: [
        { title: "Kino", expense: 38 },
        { title: "Apassionata", expense: 68 },
      ],
      category: "Entertainment",
      budget: 1000,
      overSpend: false,
    },
    {
      individualExpenses: [
        { title: "Spaghetti", expense: 16 },
        { title: "Pommes", expense: 5 },
        { title: "Ramen", expense: 18 },
      ],
      category: "Food",
      budget: 1000,
      overSpend: false,
    },
  ];
  const [storage, setStorage] = useState(initialStorage);
  return { state: storage, setState: setStorage };
}

export default stateManagement;
