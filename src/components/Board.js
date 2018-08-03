import React from 'react';

import '../styles/index.css';
import Square from './Square';

class Board extends React.Component {
    
    //TODO 5

    //TODO 0
    //TODO 6
    //TODO 7
    renderSquare = () => {

    }

    //TODO8

    render() {
        const status = 'Next Player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;

//TODO 0: Create the render square function
//TODO 5: Create constructor initializing an array of length 9 to null
//TODO 6: Refactor the renderSquare method to use state
//TODO 7: Pass a function called handleClick() to square
//TODO 9: Create the handleClick function
//TODO 11: Create the turn feature. Add xIsNext to state and update handleClick
//TODO 12: Check for a winner and update status