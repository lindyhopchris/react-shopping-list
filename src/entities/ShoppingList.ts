import ShoppingItemInterface from './ShoppingItemInterface';
import ShoppingListInterface from './ShoppingListInterface';
import ShoppingItem from './ShoppingItem';

export default class ShoppingList implements ShoppingListInterface {
    name: string;
    items: Array<ShoppingItemInterface>;

    constructor(name: string, items: Array<ShoppingItemInterface> = []) {
        this.name = name;
        this.items = items;
    }

    addItem(name: string): ShoppingListInterface {
        let id = this.nextIndex();
        let items = [...this.items];

        items.push(new ShoppingItem(id, name));

        return new ShoppingList(this.name, items);
    }

    checkOffItem(id: number): ShoppingListInterface {
        let items = this.items.map(item => {
            if (id === item.id) {
                return item.markAsCheckedOff();
            }

            return item;
        });

        return new ShoppingList(this.name, items);
    }

    findItemById(id: number): ShoppingItemInterface | null {
        return this.items.find(item => id === item.id) || null;
    }

    lastIndex(): number {
        let lastItem = this.items[this.items.length - 1];
        return lastItem?.id || 0;
    }

    nextIndex(): number {
        return this.lastIndex() + 1;
    }
}