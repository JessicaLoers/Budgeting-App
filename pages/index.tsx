import type { NextPage } from 'next';
import { useState } from 'react';
import Header from '../components/Header';
import BudgetCard from '../components/BudgetCard';
import UncategorizedBudgetCard from '../components/UncategorizedBudgetCard';
import TotalBudgetCard from '../components/TotalBudgetCard';
import AddBudget from '../components/AddBudget';

const Home: NextPage = () => {
  const [showAddBudget, setShowAddBudget] = useState(false);

  function handleShowAddBudget() {
    setShowAddBudget(!showAddBudget);
  }

  return (
    <>
      <Header onShowAddBudget={handleShowAddBudget} />
      <BudgetCard />
      <UncategorizedBudgetCard />
      <TotalBudgetCard />
      {showAddBudget && <AddBudget onCloseAddBudget={handleShowAddBudget} />}
    </>
  );
};

export default Home;
