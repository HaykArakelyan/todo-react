import { useState } from 'react';
import addTodo from '../images/add.png';

import styles from './Header.module.css';

export const Header = ({ addToList }) => {
    const [item, setItem] = useState({});
    
    const addFromKeyBoard = (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    }

    const getNewTitle = (e) => {
        setItem({
            id: new Date().getTime(),
            title: e.target.value,
            finished: false,
        });
    }

    const addItem = () => {
        if (item.title === undefined) {
            return;
        }
        addToList(item);
        setItem({});
    }

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <input
                    placeholder="Enter todo"
                    value={item?.title || ''}
                    onChange={(e) => getNewTitle(e)}
                    onKeyDown={(e) => addFromKeyBoard(e)}
                    type='text'
                />
            </div>
            <div className={styles.headerRight}>
                <button onClick={() => addItem()}>
                    <img
                        className={styles.add} 
                        src={addTodo}
                        alt= 'add'
                    />
                </button>
            </div>
        </div>
    )
}
