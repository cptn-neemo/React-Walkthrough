import React from 'react';

class Square extends React.Component {
    render() {
        return (
            <button className="square">

            </button>
        );
    }
}

export default Square;

//TODO 1: Passing down of props
//TODO 2: Onclick. Difference between alert() and () => alert(), arrow functions
//TODO 3: Constructor with props and state, change this.props => this.state, always need to call super(props)
//TODO 4: Change on onclick from alert('click') to setting the state
//TODO 8: Change onclick to the passed prop callback from Board
//TODO 10: Change Square from a class to a functional component