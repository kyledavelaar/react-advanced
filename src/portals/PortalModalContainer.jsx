import React from 'react';
import Portal from './Portal';
import './Portal.css';

class PortalModalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow() {
        this.setState({showModal: true});
    }
    handleHide() {
        this.setState({showModal: false});
    }
    handleBubblingClick = () => {
        console.log('clicked child button');
    }

    render() {
        return (
            <div className="container" onClick={this.handleBubblingClick}>
                Overflow Hidden
                <button onClick={this.handleShow}>Show Modal</button>
                {this.state.showModal &&
                <Portal>
                    <div className="modalPortal">
                        <div>
                            With a portal we can render content into a different part of the DOM as if it were any other react child
                        </div>
                        This is being rendered inside the #modal-container div
                        <button onClick={this.handleHide}>Hide Modal</button>
                        <button>Click to See bubbling up to parent onClick handler</button>
                    </div>
                </Portal>}
            </div>
        );
    }
}

export default PortalModalContainer;