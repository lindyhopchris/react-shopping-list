import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingItemForm from './ShoppingItemForm';

describe('<ShoppingItemForm>', () => {
    test('it submits a shopping item and clears the form field', () => {
        // Given form is displayed on screen...
        const handleSubmit = jest.fn();

        render(<ShoppingItemForm onSubmit={handleSubmit} />);

        // When the user types in the word "Pears" and submits it
        fireEvent.change(screen.getByLabelText('Add Item:'), { target: { value: 'Pears' }});
        fireEvent.click(screen.getByText('Add'));

        // Then the `onSubmit` callback is executed with the word "Pears" and the form field is emptied.
        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit).toHaveBeenCalledWith('Pears');
        expect(screen.getByLabelText('Add Item:')).toHaveValue('');
    });

    test('it does not submit an empty form field', () => {
        // Given the form is display on the screen
        const handleSubmit = jest.fn();

        render(<ShoppingItemForm onSubmit={handleSubmit} />);

        // When the user doesn't enter anything and submits the form
        fireEvent.click(screen.getByText('Add'));

        // Then the `onSubmit` callback is not executed.
        expect(handleSubmit).not.toHaveBeenCalled();
    });

    test('it does not submit empty whitespace', () => {
        // Given the form is displayed on the screen
        const handleSubmit = jest.fn();

        render(<ShoppingItemForm onSubmit={handleSubmit} />);

        // When the user types some empty spaces i.e. "   " and submits the form
        fireEvent.change(screen.getByLabelText('Add Item:'), { target: { value: '   ' }});
        fireEvent.click(screen.getByText('Add'));

        // Then the `onSubmit` callback is not executed and the form field is emptied.
        expect(handleSubmit).not.toHaveBeenCalled();
        expect(screen.getByLabelText('Add Item:')).toHaveValue('');
    });

    test('it trims empty whitespace when submitting a value', () => {
        // Given the form is displayed on the screen
        // When the user types a name with some whitespace (e.g. "  Pears  ") and submits the form
        // The onSubmit callback is executed with the trimmed string (i.e. "Pears").
    });
});