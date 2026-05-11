import React, { useState, useEffect } from 'react'
import ExpenseInput from './Components/ExpenseInput'
import Header from './Components/Header'
import DisplayExpenses from './Components/DisplayExpenses'


export default function App() {
  const [expenses, setExpenses] = useState([])
  
  // Fetch expenses from the mock API when the component mounts
  useEffect(() => {
    fetch('http://localhost:3001/expenses')
      .then(response => response.json())
      .then(data => setExpenses(data))
      .catch(error => console.error('Error fetching expenses:', error))
  }, [])

  // Add a new expense to the mock API and update state
  const addExpense = (expenseData) => {
    fetch('http://localhost:3001/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expenseData)
    })
    .then(response => response.json())
    .then(data => {
      setExpenses([...expenses, data])
    })
    .catch(error => {
      console.error('Error adding expense:', error)
    })
  }

  // Delete an expense from the mock API and update state
  const deleteExpense = (id) => {
    fetch(`http://localhost:3001/expenses/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setExpenses(expenses.filter(expense => expense.id !== id))
    })
    .catch(error => {
      console.error('Error deleting expense:', error)
    })
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
