import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingItem from './ShoppingItem';
import ShoppingItemEntity from '../../../entities/ShoppingItem';

describe('<ShoppingItem>', () => {
    test('it displays the item name', () => {
        // Arrange: given a shopping item named "Apples"...
        const item = new ShoppingItemEntity(1, 'Apples');
        const handleCheckOff = () => {};

        // Act: when the shopping item component renders...
        render(<ShoppingItem item={item} onCheckOff={handleCheckOff} />);

        // Assert: the text "Apples" is visible to the user.
        const displayedItem = screen.getByText(/Apples/);
        expect(displayedItem).toBeVisible();
    });

    test('it displays the item as checked off', () => {
        // Arrange: given a shopping item that is checked off...
        const item = new ShoppingItemEntity(1, 'Bananas', true);
        const handleCheckOff = () => {};
        
        // Act: when the shopping item component renders...
        render(<ShoppingItem item={item} onCheckOff={handleCheckOff} />);

        // Assert: the item text is shown as striked-through and there is no check off button.
        const displayedItem = screen.getByText(/Bananas/);
        const button = screen.queryByText('Check Me Off!');

        expect(displayedItem).toHaveClass('text-decoration-line-through');
        expect(button).toBe(null);
    });

    test('it displays the item as not checked off', () => {
        // Arrange: given a shopping item that is checked off...
        const item = new ShoppingItemEntity(1, 'Bananas', false);
        const handleCheckOff = () => {};
        
        // Act: when the shopping item component renders...
        render(<ShoppingItem item={item} onCheckOff={handleCheckOff} />);

        // Assert: the item text is not shown as striked-through and it has a check off button.
        const displayedItem = screen.getByText(/Bananas/);
        const button = screen.getByText('Check Me Off!');

        expect(displayedItem).not.toHaveClass('text-decoration-line-through');
        expect(button).toBeVisible();
    });

    test('it allows the user to check off the item', () => {
        // Arrange: given a shopping item that is not checked off and is rendered to the screen...
        const item = new ShoppingItemEntity(1, 'Pears', false);
        const handleCheckOff = jest.fn();

        render(<ShoppingItem item={item} onCheckOff={handleCheckOff} />);

        // Act: when the user clicks the "Check Me Off!" button...
        fireEvent.click(screen.getByText('Check Me Off!'));

        // Assert: the onCheckOff action is triggered once.
        expect(handleCheckOff).toHaveBeenCalledTimes(1);
    });
});