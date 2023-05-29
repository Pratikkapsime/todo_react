export function TodoItem({completed, id, title, toggleTodo, deleteTodo}){
    return(
        <li>
            <lable>
               <input type="checkbox" checked={completed}
                onChange={e=>toggleTodo(id,e.target.checked)}
                />
                {title}
            </lable>
            <button
                onClick={()=>deleteTodo(id)}
                className="btn btn-danger">
                    Delete
            </button>
        </li>
    )
}