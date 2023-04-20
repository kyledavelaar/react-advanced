import React from 'react';
import useModal from './customHookModal';

function ModalWithCustomHook(props) {
    const [ open, toggleModal ] = useModal(false);

    return (
        <div>
            <button onClick={() => toggleModal()}>Open Hook Modal</button>
            {open && (
                <div>My Modal Shown By Custom Hook</div>
            )}
        </div>
    )

}

export default ModalWithCustomHook;