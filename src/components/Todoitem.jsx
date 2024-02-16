function ToDoItem(props)
{
    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr
    
    function handleDelete(deletedid)
    {
      var temarr=activityArr.filter(function(item){
        if(item.id===deletedid)
        {
            return false
        }
        else{
            return true
        }
      })

      setactivityArr(temarr)
    }
    
    return(
        <div className="flex justify-between">
        <p>{props.index+1}.{props.activity}</p>
        <button className="text-red-600" onClick={()=>handleDelete(props.id)} >Delete</button>
        </div>
    )
}

export default ToDoItem