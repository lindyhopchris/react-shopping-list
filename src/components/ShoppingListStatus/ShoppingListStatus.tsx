import ShoppingItemInterface from '../../entities/ShoppingItemInterface';

interface ShoppingListStatusPropsInterface {
    items: Array<ShoppingItemInterface>,
}

export default function ShoppingListStatus(props: ShoppingListStatusPropsInterface) {
    const { items } = props;
    const completed = items.filter(item => item.checkedOff);
    const allCompleted = (completed.length === items.length);

    if (0 === items.length) {
        return (
            <small className="text-warning">You have no items on your shopping list.</small>
        );
    }

    if (allCompleted) {
        return (
            <small className="fw-bold text-success">Congratulations! You've ticked off all the items on your list.</small>
        );
    }

    return (
        <small>
            You've completed
            {' '}
            <strong>{completed.length}/{items.length}</strong>
            {' '}
            items on your list.
        </small>
    );
}