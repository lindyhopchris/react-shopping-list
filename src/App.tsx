import { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingItemForm from './components/ShoppingItemForm';
import ShoppingListStatus from './components/ShoppingListStatus';
import createShoppingList from './helpers/createShoppingList';

function App() {
  const [shoppingList, setShoppingList] = useState(createShoppingList());

  const onCheckOffItem = (id: number): void => {
    let newShoppingList = shoppingList.checkOffItem(id);
    setShoppingList(newShoppingList);
  };

  const onAddItem = (name: string): void => {
    let newShoppingList = shoppingList.addItem(name);
    setShoppingList(newShoppingList);
  }

  return (
    <div className="container">
      <h1 className="mt-5">{shoppingList.name}</h1>
      <hr />
      <ShoppingItemForm onSubmit={onAddItem} />
      <ShoppingList items={shoppingList.items} onCheckOff={onCheckOffItem} />
      <div className="mt-1 text-center">
        <ShoppingListStatus items={shoppingList.items} />
      </div>
    </div>
  );
}

export default App;
