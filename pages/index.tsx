import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/Header";
import BudgetCard from "../components/BudgetCard";
import UncategorizedBudgetCard from "../components/UncategorizedBudgetCard";
import TotalBudgetCard from "../components/TotalBudgetCard";
import AddBudget from "../components/AddBudget";
import AddExpense from "../components/AddExpense";
import stateManagement from "../lib/stateManagement";

const Home: NextPage = () => {
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);

  const storage = stateManagement();

  function handleShowAddBudget() {
    setShowAddBudget(!showAddBudget);
  }

  function handleShowAddExpense() {
    setShowAddExpense(!showAddExpense);
  }

  return (
    <div className='container mx-auto'>
      <Header
        onShowAddBudget={handleShowAddBudget}
        onShowAddExpense={handleShowAddExpense}
      />
      {storage.map((expense) => (
        <BudgetCard
          onShowAddExpense={handleShowAddExpense}
          categoryBudget={expense}
        />
      ))}
      <UncategorizedBudgetCard onShowAddExpense={handleShowAddExpense} />
      <TotalBudgetCard onShowAddExpense={handleShowAddExpense} />
      {showAddBudget && <AddBudget onCloseAddBudget={handleShowAddBudget} />}
      {showAddExpense && (
        <AddExpense onCloseAddExpense={handleShowAddExpense} />
      )}
    </div>
  );
};

export default Home;
