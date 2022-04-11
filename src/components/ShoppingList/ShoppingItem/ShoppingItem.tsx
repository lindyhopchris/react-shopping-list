import React from 'react';
import ShoppingItemInterface from '../../../entities/ShoppingItemInterface';

interface ShoppingItemPropsInterface {
    item: ShoppingItemInterface,
    onCheckOff: (id: number) => void,
}

export default function ShoppingItem(props: ShoppingItemPropsInterface) {
    const { item, onCheckOff } = props;
    const onClick = () => {
        onCheckOff(item.id);    
    };
    
    return (
        <li className={`list-group-item ${item.checkedOff ? 'text-decoration-line-through text-muted' : ''}`}>
            <div className="row">
                <div className="col">
                    {item.id}. {item.name}
                </div>
                <div className="col-3 text-end">
                    {!item.checkedOff &&
                        <button type="button" className="btn btn-sm btn-warning" onClick={onClick}>
                            Check Me Off!
                        </button>
                    }
                </div>
            </div>
            
        </li>
    );
}