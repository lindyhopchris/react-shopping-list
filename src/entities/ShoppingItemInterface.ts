export default interface ShoppingItemInterface {
    id: number,
    name: string,
    checkedOff: boolean,
    markAsCheckedOff(): ShoppingItemInterface,
}