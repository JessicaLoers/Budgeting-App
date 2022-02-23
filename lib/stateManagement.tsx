import { useState } from "react";
import BudgetStateInterface from "../types/BudgetStateInterface";

function stateManagement() {
  const [storage, setStorage] = useState<BudgetStateInterface[]>([]);
  return { state: storage, setState: setStorage };
}

export default stateManagement;
