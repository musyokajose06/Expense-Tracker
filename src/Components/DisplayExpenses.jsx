import React, { useState } from 'react'

export default function DisplayExpenses({ expenses, onDeleteExpense }) {
  const [searchTerm, setSearchTerm] = useState('')

    if (expenses.length === 0) {
        return (
            <div class="p-2 space-y-2 w-full flex flex-col items-center justify-center">
                <h1 class="text-2xl font-bold style font-serif">NO EXPENSES ADDED</h1>
                <p class="text-sm">Start adding your expenses to see them here</p>            
            </div>
        )
    }

    const filteredExpenses = expenses.filter(expense =>
        expense.expenseName.toLowerCase().includes(searchTerm) ||
        expense.expenseDescription.toLowerCase().includes(searchTerm) ||
        expense.expenseCategory.toLowerCase().includes(searchTerm) ||
        expense.expenseAmount.toString().includes(searchTerm) ||
        expense.expenseDate.includes(searchTerm)
    )
    
    
  return (
    <div class="p-2 space-y-2 w-full flex flex-col items-start ">
       <input 
            type="text" 
            placeholder='Search Expense...' 
            class="border rounded p-2 w-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table class="border-collapse border border-gray-400 w-full text-center font-mono">
            <thead>
                <tr class="text-white bg-gray-800 ">
                    <th class="border border-gray-300 p-2">Expense Name</th>
                    <th class="border border-gray-300 p-2">Description</th>
                    <th class="border border-gray-300 p-2">Category</th>
                    <th class="border border-gray-300 p-2">Amount</th>
                    <th class="border border-gray-300 p-2">Date</th>
                    <th class="border border-gray-300 p-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredExpenses.length === 0 ? (
                    <tr class="border border-gray-300">
                        <td class="border border-gray-300 p-2" colspan="6">No matching expenses found.</td>
                    </tr>
                ) : 
                    filteredExpenses.map((expense, index) => (
                        <tr key={index} class="border border-gray-300">
                            <td class="border border-gray-300 p-2">{expense.expenseName}</td>
                            <td class="border border-gray-300 p-2">{expense.expenseDescription}</td>
                            <td class="border border-gray-300 p-2">{expense.expenseCategory}</td>
                            <td class="border border-gray-300 p-2">${expense.expenseAmount}</td>
                            <td class="border border-gray-300 p-2">{expense.expenseDate}</td>
                            <td class="border border-gray-300 p-2">
                            <button 
                                onClick={() => onDeleteExpense(index)}
                                class="bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
