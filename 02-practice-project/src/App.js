import React, {useState} from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UserList';


function App() {
  const [userList, setUsersList] = useState([]);
  const addUserHandler = (uName,uAge) =>{

    //Child key error
    setUsersList((preUserlist) =>{
      return [...preUserlist, {name:uName, age:uAge, id:Math.random().toString()}]
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
