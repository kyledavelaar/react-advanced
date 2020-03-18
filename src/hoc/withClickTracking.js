import React from 'react';

export const withClickTracking = WrappedComponent =>
  class extends React.Component {
    state = { times: 0 }

    handleClick = e => {
      e.preventDefault();
      let { times } = this.state;
      this.setState({ times: times += 1 })
    }

    render() {
      const { children, onClick, ...props } = this.props;
      const { times } = this.state;
      return (
        <span onClick={this.handleClick}>
          <WrappedComponent
            type={times > 5 ? 'danger' : 'primary'}
            {...props}
          >
            {children} {times}
          </WrappedComponent>
        </span>
      )
    }
  }

export default withClickTracking