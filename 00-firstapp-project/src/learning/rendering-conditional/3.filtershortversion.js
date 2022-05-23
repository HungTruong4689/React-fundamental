import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css";
import ExpenseFilter from './ExpenseFilter';
import Card from "../UI/Card";
function Expenses(props){
    //const expenses = props.data;
    const [filterYear,setFilterYear] = useState('2020')
    const filterChangeHandler = selectedYear =>{
      console.log('Expenses.js');
      console.log(selectedYear);
      setFilterYear(selectedYear);
    }
    const filteredExpenses = props.data.filter(expense =>{
      return expense.date.getFullYear().toString() ===filterYear;
    })
    let expensesContent = <p>No expenses found.</p>;
    if(filteredExpenses.length >0){
      expensesContent = filteredExpenses.map((expense) => 
      (<ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>));
    }
    return <Card className="expenses">
      <ExpenseFilter 
      selected={filterYear}
      onChangeFilter={filterChangeHandler}/>
      {expensesContent}
      {/* {filteredExpenses.length ===0 ? (<p>No expenses found</p>): (filteredExpenses.map((expense) => 
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>))} */}
      {/* {filteredExpenses.map((expense) => 
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>)} */}
        {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/> */}
    </Card>
}

export default Expenses;