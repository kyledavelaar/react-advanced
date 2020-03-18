import React from 'react';

const withClickTracking = ReactComponent =>
    class extends React.PureComponent {
        state = {
            clicks: 0
        }
        handleClick = () => {
            console.log('click')
            let { clicks } = this.state;
            this.setState({
                clicks: clicks += 1
            })
        }
        render() {
            return (
                <span onClick={this.handleClick}>
                    <ReactComponent {...this.props}>
                        {this.props.children}: {this.state.clicks}
                    </ReactComponent>
                </span>
            )
        }
    }

const kButton = ({ children }) => <button>{children}</button>
const kLink = ({ children }) => <a href="#">{children}</a>

const KyleButtonWithClickTracking = withClickTracking(kButton);
const KyleLinkWithClickTracking = withClickTracking(kLink);


export default class HocExample extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <KyleButtonWithClickTracking>HOC button</KyleButtonWithClickTracking>
                <KyleLinkWithClickTracking>HOC link</KyleLinkWithClickTracking>
            </React.Fragment>
        )
    }
}