import React, { useState } from 'react'

export default function ExpenseInput({ onAddExpense }) {
  const [expenseName, setExpenseName] = useState('')
  const [expenseDescription, setExpenseDescription] = useState('')
  const [expenseCategory, setExpenseCategory] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')
  const [expenseDate, setExpenseDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!expenseName || !expenseDescription || !expenseCategory || !expenseAmount || !expenseDate) {
      alert('Please fill in all fields')
      return
    }
    
    const expenseData = {
      expenseName,
      expenseDescription,
      expenseCategory,
      expenseAmount,
      expenseDate
    }
    
    onAddExpense(expenseData)
    
    setExpenseName('')
    setExpenseDescription('')
    setExpenseCategory('')
    setExpenseAmount('')
    setExpenseDate('')
  }

  return (
    <form class="p-2 border rounded-md w-80" onSubmit={handleSubmit}>
        <div class="p-2 space-y-2">
            <h1 class="text-2xl font-bold style font-serif">ADD EXPENSE</h1>
            <p class="text-sm">Enter your expense details below</p>            
        </div>
        <div class="p-2 space-y-2 w-full flex flex-col items-center justify-center">
            <input 
                type="text" 
                placeholder='Enter expense name'
                class="border rounded p-2 w-full"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Expense description'
                class="border rounded p-2 w-full"
                value={expenseDescription}
                onChange={(e) => setExpenseDescription(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Enter expense category'
                class="border rounded p-2 w-full"
                value={expenseCategory}
                onChange={(e) => setExpenseCategory(e.target.value)}
            />
            <input 
                type="number" 
                placeholder='Enter amount'
                class="border rounded p-2 w-full"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
            />
            <input 
                type="date" 
                placeholder='dd/mm/yyyy'
                class="border rounded p-2 w-full"
                value={expenseDate}
                onChange={(e) => setExpenseDate(e.target.value)}
            />
            <button class="w-70 mt-2 border rounded-md px-2 bg-white text-black font-bold hover:bg-black hover:text-white hover:transform hover:scale-105 ease-in duration-300">Submit</button>            
        </div>


    </form>
  )
}
