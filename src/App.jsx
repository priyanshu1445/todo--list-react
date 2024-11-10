import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Plus , Trash, CheckCircle} from 'react-feather';
import './App.css'

function App() {

  //  yeh total list ke liye 
  const [todos, setTodos] = useState([]);
  //  yeh todo jo likh rhe h uske liye 
  const [ todo , setTodo] = useState("");


  const addTodo = ()=>{
    let todoitem = {
      name:todo,
      check:false 
    }

    if(todo !==""){
      setTodos([...todos,todoitem]);
      setTodo("");
    }

  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo,ind) =>{
      return ind !== index;
    }) ;

    setTodos(newTodos);

  }

  const markTodo = (index) =>{
    const newTodos = todos.map((todo,ind)=>{
      if(ind === index){
        todo.check = !todo.check 
      }

      return todo;
    });

 setTodos(newTodos);
  }

  return (
    <div className='App'>
        <div className="brand">

           <CheckCircle color='#666'> </CheckCircle>
           <h1>TODO-APP</h1>
        </div>

        <h3>Friday,19 September</h3>



{/*  details dekhne ke liye lagya gya h ki hamri state me kya save hora h   */}
        {/* <p>{JSON.stringify(todo)}</p> */}




        <div className="input-wrapper">
          <input 
          type="text"
           name='todo'
            value={todo} 
            placeholder='Create a new Todo' 
            onChange={(e)=>{
              setTodo(e.target.value);
            }} > 
            </input>



            <button className='add-button' onClick={addTodo} >
              <Plus></Plus>
            </button>
        </div>


    <div>


      {todos.length >0 ?     (<ul className='todo-list'>
        {
          todos.map((entry,index) => {
          return   <li>
            <input type='checkbox' 
                name='todocheck'
                checked = {entry.check}
                onChange={(e) =>{
                  markTodo(index);
                }}
            ></input>
             <p className= {entry.check ? 'check' : ''}>{entry.name}</p>
             <button onClick={()=>{deleteTodo(index)}}>
               <Trash size={14}> </Trash>
             </button>
           </li>
          })
        }
       
      </ul>) :
       ( <div className="empty">
        <p>No todo's found !</p>
      </div> )
      }
  


  



    </div>



    </div>
  )
}

export default App
