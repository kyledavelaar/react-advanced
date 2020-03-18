import  React from 'react';
import ReactDOM from 'react-dom';


class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.modalRoot = document.getElementById('modal-root');
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.modalRoot,
        )
    }
}

export default Portal;