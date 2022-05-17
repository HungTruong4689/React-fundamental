//ExpenseForm
import React,{useState} from 'react';
import './ExpenseForm.css';
function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //Previos State
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
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
        }
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

//Expenses
import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css";
import ExpenseFilter from './ExpenseFilter';
import Card from "../UI/Card";
function Expenses(props){
    const expenses = props.data;
    const [filterYear,setFilterYear] = useState('2020')
    const filterChangeHandler = selectedYear =>{
      console.log('Expenses.js');
      console.log(selectedYear);
      setFilterYear(selectedYear);
    }
    return <Card className="expenses">
      <ExpenseFilter selected={filterYear}onChangeFilter={filterChangeHandler}/>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </Card>
}

export default Expenses;