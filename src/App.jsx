import React, { useState } from 'react'
import ExpenseInput from './Components/ExpenseInput'
import Header from './Components/Header'
import DisplayExpenses from './Components/DisplayExpenses'


export default function App() {
  const [expenses, setExpenses] = useState([])

  const addExpense = (expenseData) => {
    setExpenses([...expenses, expenseData])
  }

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index))
  }

  return (
    <> 
      <div>
        <header class="flex flex-col p-3">
          <h1 class="text-5xl font-bold font-serif">EXPENSE TRACKER</h1>
          <p class="text-gray-500">Start taking control of your finances and life. Record, categorize and analyze your spending</p>          
        </header>
      </div>  
      
      <div class="flex flex-row items-center m-3 gap-2">
        <ExpenseInput onAddExpense={addExpense} />
        <DisplayExpenses expenses={expenses} onDeleteExpense={deleteExpense} />
      </div>
    </>
  )
}
