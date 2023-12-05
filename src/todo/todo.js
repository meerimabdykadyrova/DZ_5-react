import React from "react";
import {useState} from "react"
import AddTodo from "./addTodo";
import TaskList from "./TaskList";

let nextId = 3;
const initialTodos = [
    {id: 0, title:'Buy bread',done: true},
    {id: 1, title:'Buy milk',done: true},
    {id: 2, title:'Buy eggs',done: true}

]
export default function TaskApp(){
    const [todos, setTodos] = useState(initialTodos)

    function handleAddTodos(title){
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }

    function handleAddChangesTodos(nextTodo){
      setTodos(
          todos.map(t => {
              if (t.id === nextTodo.id) {
                  return nextTodo;
              }else {
                  return t
              }
          })
      );
    }

    function handleDeleteTodo(todoId){
        setTodos(todos.filter((t)=>t.id !== todoId));
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodos}/>
            <TaskList
                todos={todos}
                onChangeTodo={handleAddChangesTodos}
                onDelete= {handleDeleteTodo}
            />
        </>
    );
}