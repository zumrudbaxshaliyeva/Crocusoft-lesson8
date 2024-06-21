import React from 'react'

function todoList() {

let [todo, setTodo] = React.useState<string>('');
let [arr, setArr] = React.useState<string[]>([]);

function sendTodo(e:React.ChangeEvent<HTMLInputElement>):void {
  setTodo(e.target.value);
  console.log(todo);
    
}

function addTodo(e: React.FormEvent<HTMLFormElement>):void {
  e.preventDefault();
  console.log(`This is input ${todo}`);
  setArr([...arr, todo]);
  }

  return (
    <React.Fragment>
      <form onSubmit={addTodo}>
        <input 
          onChange={sendTodo} type="text"
          value={todo}
          placeholder='Bir Todo Yazin' />
          
        <button type="submit">Add Todo</button>
        <h2>List Of Todos</h2>
        {
          arr.map((todo, index)=>(
            <p key={index}>{todo}</p>
          ))
        }

      </form>

    </React.Fragment>
  )
}

export default todoList