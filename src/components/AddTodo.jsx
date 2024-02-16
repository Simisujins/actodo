import {useState} from "react"

function AddTodo(props) 
{
   const activityArr = props.activityArr
   const setactivityArr = props.setactivityArr
 const [newactivity,setNew] =useState("")
    
 function handleChange(event)
 {
    setNew(event.target.value)
 }

 function addNew()
 {
    setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
    setNew("")
 }
 return (
        <div>
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage activities</h1>

            <div>
                <input value={newactivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?"></input>
                <button onClick={addNew} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>
        </div>
    )
}

export default AddTodo