import React from 'react';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const {isLoading,error, sendRequest: sendTaskRequest} = useHttp();

  
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const createTask = (taskText,taskData)=>{
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    }
  const enterTaskHandler = async (taskText) => {
    
    sendTaskRequest({url:'https://react-http-6b4a6.firebaseio.com/tasks.json',
    method: 'POST',
    headers : {
      'Content-Type': 'application/json',
    },
    body: {text: taskText},
  },
    createTask.bind(null,taskText)
    );
  // }, [])
    // setIsLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch(
    //     'https://react-http-6b4a6.firebaseio.com/tasks.json',
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({ text: taskText }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error('Request failed!');
    //   }

    //   const data = await response.json();

      
    // } catch (err) {
    //   setError(err.message || 'Something went wrong!');
    // }
    // setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
