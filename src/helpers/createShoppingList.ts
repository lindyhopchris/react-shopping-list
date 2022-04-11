import ShoppingListInterface from '../entities/ShoppingListInterface';
import ShoppingList from '../entities/ShoppingList';
import ShoppingItem from '../entities/ShoppingItem';

export default function createShoppingList(): ShoppingListInterface {
    return new ShoppingList('My Groceries', [
        new ShoppingItem(1, 'Apples'),
        new ShoppingItem(2, 'Pears', true),
        new ShoppingItem(3, 'Bananas'),
    ]);
}