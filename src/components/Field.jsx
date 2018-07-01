import React from 'react';
import './styles/Field.css';

const Field = ({selected, children}) => {
    return (
        <div className={"field " + (selected && "selected")}>
            {children}
        </div>
    );
}

export default Field;