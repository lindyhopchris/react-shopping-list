import ShoppingItemInterface from '../../entities/ShoppingItemInterface';
import ShoppingItem from './ShoppingItem';

interface ShoppingListPropsInterface {
    items: Array<ShoppingItemInterface>,
    onCheckOff: (id: number) => void,
}

export default function ShoppingList(props: ShoppingListPropsInterface) {
    const { items, onCheckOff } = props;
    const handleCheckOff = (id: number) => () => onCheckOff(id);

    const listItems = items.map(item => 
        <ShoppingItem item={item} key={item.id} onCheckOff={handleCheckOff(item.id)} />
    );

    return (
        <ul className="list-group">
            {listItems}
        </ul>
    );
}