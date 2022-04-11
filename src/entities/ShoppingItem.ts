import ShoppingItemInterface from './ShoppingItemInterface';

export default class ShoppingItem implements ShoppingItemInterface {
    id: number;
    name: string;
    checkedOff: boolean;

    constructor(id: number, name: string, checkedOff: boolean = false) {
        this.id = id;
        this.name = name;
        this.checkedOff = checkedOff;
    }

    markAsCheckedOff(): ShoppingItemInterface {
        return new ShoppingItem(this.id, this.name, true);
    }
}