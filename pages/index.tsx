import type { NextPage } from "next";
import { SyntheticEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import BudgetCard from "../components/BudgetCard";
import UncategorizedBudgetCard from "../components/UncategorizedBudgetCard";
import TotalBudgetCard from "../components/TotalBudgetCard";
import AddBudget from "../components/AddBudget";
import AddExpense from "../components/AddExpense";
import stateManagement from "../lib/stateManagement";
import useLocalStorage from "../lib/useLocalStorage";
import BudgetStateInterface from "../types/BudgetStateInterface";
import Expense from "../types/Expense";

const Home: NextPage = () => {
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("Uncategorized");
  const [uncategorized, setUncategorized] = useState<Expense[]>([]);

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

  function handleStateChange(newState: []) {
    setState(newState);
  }

  function handleBudgetDelete(categoryBudget: BudgetStateInterface) {
    const { category, individualExpenses } = categoryBudget;
    setUncategorized([
      ...uncategorized,
      ...individualExpenses.map((expense) => expense),
    ]);
    const updatedBudgets = state.filter(
      (budget) => budget.category !== category
    );
    setState(updatedBudgets);
  }

  function handleUncategorizedDelete(uncategorizedId: number) {
    const updatedUncatgorized = uncategorized.filter(
      (expense) => expense.id !== uncategorizedId
    );
    setUncategorized(updatedUncatgorized);
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
          budgets={state}
          handleBudgetsChange={handleStateChange}
          onHandleBudgetDelete={handleBudgetDelete}
        />
      ))}
      <UncategorizedBudgetCard
        onShowAddExpense={handleShowAddExpense}
        uncategorized={uncategorized}
        onHandleUncategorizedDelete={handleUncategorizedDelete}
      />
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
