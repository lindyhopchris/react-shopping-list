import React, { useState } from 'react';

interface ShoppingItemFormPropsInterface {
    onSubmit: (name: string) => void,
};

export default function ShoppingItemForm(props: ShoppingItemFormPropsInterface) {
    const { onSubmit } = props;
    const [name, setName] = useState('');
    
    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (name) {
            onSubmit(name);
            setName('');
        }
    };

    const handleNameChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setName(e.currentTarget.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <label htmlFor="shoppingItem--name" className="col-sm-2 col-form-label">Add Item:</label>
                <div className="col-sm-10">
                    <div className="input-group">
                        <input type="text" className="form-control" id="shoppingItem--name" value={name} onChange={handleNameChange} />
                        <button type="submit" className="btn btn-success">Add</button>
                    </div>
                </div>
            </div>
        </form>
    );
}