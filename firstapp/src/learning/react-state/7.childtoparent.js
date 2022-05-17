//App.js
import React from 'react';
import './App.css';

import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';
function App() {
  const expenses = [
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
  const addExpenseHandler = expense =>{
    console.log('In App.js');
    console.log(expenses);
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

//NewExpense
import React from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';
const NewExpense = (props)=>{
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;
//ExpenseForm
import React,{useState} from 'react';
import './ExpenseForm.css';
function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //Previous State
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) =>{
        console.log('Title changed');
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle :event.target.value,
        // })
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle:event.target.value}
        // })
    }
    const amountChangeHandler = event =>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // })
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredAmount:event.target.value}
        // })
    }
    const dateChangeHandler = event =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate :event.target.value,
        // })
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredDate:event.target.value}
        // })
    }
    const submitHandler = (event)=>{
        //What is the purpose of this step??
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
        }
        //children to parent component
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount}
                onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" step="2022-12-31" 
                value={enteredDate}
                onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;