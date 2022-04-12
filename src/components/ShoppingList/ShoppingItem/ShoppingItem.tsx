import React from 'react';
import ShoppingItemInterface from '../../../entities/ShoppingItemInterface';

interface ShoppingItemPropsInterface {
    item: ShoppingItemInterface,
    onCheckOff: () => void,
}

export default function ShoppingItem(props: ShoppingItemPropsInterface) {
    const { item, onCheckOff } = props;
    
    return (
        <li className="list-group-item">
            <div className="row">
                <div className={`col ${item.checkedOff ? 'text-decoration-line-through text-muted' : ''}`}>
                    {item.id}. {item.name}
                </div>
                <div className="col-3 text-end">
                    {!item.checkedOff &&
                        <button type="button" className="btn btn-sm btn-warning" onClick={onCheckOff}>
                            Check Me Off!
                        </button>
                    }
                </div>
            </div>
            
        </li>
    );
}