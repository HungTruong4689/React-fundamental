

//Card UI
import './Card.css';

function Card(props){
    const classes ='card ' +props.className;
    return <div className={classes}>
        {props.children}
    </div>
}

export default Card;

//Expense Item
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card"
function ExpenseItem(props){
    
    const expenseTitle = props.title;
    const expenseAmount = props.amount;
    return <Card className="expense-item">
        {/* change to IOString  */}
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
        
    </Card>
}

export default ExpenseItem;

//Expenses
import ExpenseItem from './ExpenseItem';
import "./Expenses.css";
import Card from "./Card";
function Expenses(props){
    const expenses = props.data;
    return <Card className="expenses">
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </Card>
}

export default Expenses;