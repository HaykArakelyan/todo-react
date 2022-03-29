import { Header } from './components/Header';
import { useState } from 'react';
import { List } from './components/List';
import './components/list.css';
import './index.css';

function App() {
  const [todoList, setTodo] = useState([]);

  const addToList = (newItem) => {
    setTodo((lastElem) => {
      return [...lastElem, newItem];
    })
  }

  const removeFromList = (id) => {
    const copyOfMyTodos = todoList.filter(todo => id !== todo.id);
    setTodo(copyOfMyTodos);
  }

  const toggleCheckBox = (id) => {
    setTodo(
      todoList.map(item => {
        return item.id === id ? {...item, finished: !item.finished} : item
      })
    )
  }

  return (
    <div className="container">
        <Header addToList={addToList} />
        {
          !!todoList.length &&
          <List
            todoList={todoList}
            removeFromList={(id) => removeFromList(id)}
            toggleCheckBox={(id) => toggleCheckBox(id)}
          />
        }
    </div>
  );
}

export default App;
