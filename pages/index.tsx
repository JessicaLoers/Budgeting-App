import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/Header";
import BudgetCard from "../components/BudgetCard";
import UncategorizedBudgetCard from "../components/UncategorizedBudgetCard";
import TotalBudgetCard from "../components/TotalBudgetCard";
import AddBudget from "../components/AddBudget";
import AddExpense from "../components/AddExpense";
import stateManagement from "../lib/stateManagement";
import BudgetStateInterface from "../types/BudgetStateInterface";

const Home: NextPage = () => {
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);

  const { state, setState } = stateManagement();

  function handleShowAddBudget() {
    setShowAddBudget(!showAddBudget);
  }

  function handleShowAddExpense() {
    setShowAddExpense(!showAddExpense);
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
      {state.map((expense, index) => (
        <BudgetCard
          key={index}
          onShowAddExpense={handleShowAddExpense}
          categoryBudget={expense}
        />
      ))}
      <UncategorizedBudgetCard onShowAddExpense={handleShowAddExpense} />
      <TotalBudgetCard onShowAddExpense={handleShowAddExpense} />
      {showAddBudget && (
        <AddBudget
          state={state}
          onHandleStateChange={handleStateChange}
          onCloseAddBudget={handleShowAddBudget}
        />
      )}
      {showAddExpense && (
        <AddExpense
          onCloseAddExpense={handleShowAddExpense}
          onHandleStateChange={handleStateChange}
        />
      )}
    </div>
  );
};

export default Home;
