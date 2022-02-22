import type { NextPage } from "next";
import { SyntheticEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import BudgetCard from "../components/BudgetCard";
import UncategorizedBudgetCard from "../components/UncategorizedBudgetCard";
import TotalBudgetCard from "../components/TotalBudgetCard";
import AddBudget from "../components/AddBudget";
import AddExpense from "../components/AddExpense";
import stateManagement from "../lib/stateManagement";
import BudgetStateInterface from "../types/BudgetStateInterface";
import useLocalStorage from "../lib/useLocalStorage";

const Home: NextPage = () => {
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("Uncategorized");

  const { state, setState } = stateManagement();
  const [storedValue, setValue] = useLocalStorage("_Budgets", []);

  useEffect(() => setState(storedValue), []);
  useEffect(() => setValue(state), [state]);

  function handleShowAddBudget() {
    setShowAddBudget(!showAddBudget);
  }

  function handleShowAddExpense(
    _event: SyntheticEvent,
    budgetName?: string
  ): void {
    setShowAddExpense(!showAddExpense);
    budgetName && setSelectedBudget(budgetName);
  }

  function handleStateChange(newState: BudgetStateInterface[]) {
    setState(newState);
  }

  return (
    <div className="container mx-auto">
      <Header
        onShowAddBudget={handleShowAddBudget}
        onShowAddExpense={handleShowAddExpense}
      />
      {state.map((budget, index) => (
        <BudgetCard
          key={index}
          onShowAddExpense={handleShowAddExpense}
          categoryBudget={budget}
        />
      ))}
      <UncategorizedBudgetCard onShowAddExpense={handleShowAddExpense} />
      <TotalBudgetCard
        budgets={state}
        onShowAddExpense={handleShowAddExpense}
      />
      {showAddBudget && (
        <AddBudget
          state={state}
          onHandleStateChange={handleStateChange}
          onCloseAddBudget={handleShowAddBudget}
        />
      )}
      {showAddExpense && (
        <AddExpense
          state={state}
          onCloseAddExpense={handleShowAddExpense}
          onHandleStateChange={handleStateChange}
          selectedBudget={selectedBudget}
        />
      )}
    </div>
  );
};

export default Home;
