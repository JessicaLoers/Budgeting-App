import Expense from "../types/Expense";

const getTotalExpense = (expenses: Expense[]) => {
const result = expenses.reduce((a, b) => a + b.expense, 0)
return result
}

export default getTotalExpense