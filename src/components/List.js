import { TodoElement } from './TodoElement';

export const List = ({ todoList, removeFromList, toggleCheckBox }) => {
    return (
        <div className='list'>
            {todoList.map(todo => {
                return <TodoElement 
                            toggleCheckBox = {(id) => toggleCheckBox(id)} 
                            removeFromList = {(id) => removeFromList(id)} 
                            key={todo.id}
                            todo={todo}
                        />
            })}
        </div>
    )
}
