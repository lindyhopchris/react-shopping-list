import ShoppingItemInterface from './ShoppingItemInterface';

export default interface ShoppingListInterface {
    name: string,
    items: Array<ShoppingItemInterface>,
    addItem(name: string): ShoppingListInterface,
    checkOffItem(id: number): ShoppingListInterface,
}