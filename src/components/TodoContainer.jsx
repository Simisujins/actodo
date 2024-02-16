import AddTodo from "./AddTodo"
import TodoList from "./Todolist"
import { useState } from "react"
function TodoContainer() 
{
    const[activityArr,setactivityArr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Take a Shower"
        }
    
      ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodo activityArr={activityArr} setactivityArr={setactivityArr}></AddTodo>
               <TodoList activityArr={activityArr} setactivityArr={setactivityArr}></TodoList>
            </div>
        </div>
    )
}

export default TodoContainer