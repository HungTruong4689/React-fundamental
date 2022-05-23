// import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props){
    
    //var expenseTitle = props.title;
    const expenseAmount = props.amount;
    //useState to change State of variable
    // const [title,setTitle] = useState(props.title);
    // const clickHandler = ()=>{
    //     setTitle("Change title");
    //     // console.log(expenseTitle);
    // }
    return <li><Card className="expense-item">
        {/* change to IOString  */}
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
        
    </Card>
    </li>
}

export default ExpenseItem;