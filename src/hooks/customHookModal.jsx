import { useState } from 'react';

function useModal(modalOpen = false) {
    const [ open, onModalClick ] = useState(modalOpen);

    function toggleModal() {
        onModalClick(!open);
    }
    return [ open, toggleModal ];
}

export default useModal;