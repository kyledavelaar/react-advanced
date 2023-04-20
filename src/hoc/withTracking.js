import React from 'react';

export const withTracking = WrappedComponent => {
    return (
        class extends React.Component {
            state = { clicks: 0 };
            onClick = () => {
                let { clicks } = this.state;
                this.setState({ clicks: clicks += 1 })
            }
            render() {
                return (
                    <span onClick={this.onClick}>
                        <WrappedComponent>
                            {this.props.children}: {this.state.clicks}
                        </WrappedComponent>
                    </span>
                )
            }
        }
    )
}