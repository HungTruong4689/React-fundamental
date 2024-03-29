import React, {useState} from 'react';
import './App.css';

import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense =>{
    console.log('In App.js');
    console.log(expense);
    //setExpenses([expense, ...expenses]);
    //clean way
    setExpenses((preExpenses) =>{
      return [expense,...preExpenses];
    })
  }

  // return React.createElement('div',
  // {},
  // React.createElement('h2',{},"Let's start"),
  // React.createElement(Expenses,{data:expenses}));

  return (
    <div className="App">
      <h1>Let's start </h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      
      <Expenses  data ={expenses}/>
      
    </div>
  );
}

export default App;
