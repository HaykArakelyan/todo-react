import trash from '../images/trash.png'
export const TodoElement = ({ todo, removeFromList, toggleCheckBox }) => {

  const handleRemoveElement = () => {
    removeFromList(todo.id);
  }

  const handleToggleCheckBox = () => {
    toggleCheckBox(todo.id);

  }
  return (
    <div className="element">
      <div className='element-left'>
        <div>
          <input
              className="checked"
              type='checkbox'
              checked={todo?.finished}
              readOnly
              onChange={() => handleToggleCheckBox()}
          />
          <span className='checked-span' />
        </div>
        <p>{todo.title}</p>
      </div>
      <div className='element-right'>
        <img
            className="trash"
            src={trash}
            alt="remove"
            onClick={() => handleRemoveElement()}
        />
      </div>
    </div>
  )
}
