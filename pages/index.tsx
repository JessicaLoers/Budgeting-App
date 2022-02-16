import type { NextPage } from 'next';
import Header from '../components/Header';
import BudgetCard from '../components/BudgetCard';
import UncategorizedBudgetCard from '../components/UncategorizedBudgetCard';
import TotalBudgetCard from '../components/TotalBudgetCard';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <BudgetCard />
      <UncategorizedBudgetCard />
      <TotalBudgetCard />
    </>
  );
};

export default Home;
