import {useState} from "react" 
import ToDoItem from "./Todoitem"

function TodoList(props)
{
  const activityArr=props.activityArr
  const setactivityArr = props.setactivityArr

    

    return(
        <div className="bg-[#BDB4EA]  border rounded-md flex-grow p-4">
        <h1 className="text-2xl font-medium">Today's Activities</h1>
       
        {activityArr.length===0? <p className="mt-2">You haven't added anything yet</p>:""}

        {
            activityArr.map(function(item,index){
                return <ToDoItem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setactivityArr={setactivityArr}></ToDoItem>
            })
        }

    </div>
    )
}
export default TodoList