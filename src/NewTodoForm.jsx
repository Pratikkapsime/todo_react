import { useState } from "react"



export function NewTodoForm({onSubmit}){
    // props.onSubmit
    const[newItem,setNewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if(newItem==="") return

        onSubmit(newItem)
    
        setNewItem("")  // set new item as empty string to clear after one Submit
    }
    return(
        <form onSubmit={handleSubmit} classNmae="new-item-form">
        <div className="row">
          <lable htmlFor="item">New Item</lable>
          <input
            value={newItem}
            onChange={e=>setNewItem(e.target.value)}
            type="text"
            id="item"/>
        </div>
        <button className="btn">Add</button>
      </form>
    )  
}