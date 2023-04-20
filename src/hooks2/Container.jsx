import React from 'react';
import ApiCall from './ApiCall';
import NameForm from './NameForm';

export default class Container extends React.PureComponent {
    state = {
        name: ''
    }

    onNameSubmit = name => {
        this.setState({
            ...this.state,
            name
        })
    }

    render() {
        return (
            <div>
                <h1>Container Name: {this.state.name}</h1>
                <NameForm onNameSubmit={this.onNameSubmit}/>
                <ApiCall name={this.state.name}/>
            </div>

        )
    }
}