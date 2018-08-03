## React Walkthrough

This walkthrough is based on the official React getting started guide which you can find [here](https://reactjs.org/tutorial/tutorial.html)

## Setup

```
git clone https://github.com/cptn-neemo/React-Walkthrough.git
cd React-Walkthrough
npm install
```

## Code Snippets 

### TODO 0

```javascript
renderSquare(i) {
    return <Square value={i} />;
}
```

### TODO 1

```javascript
render() {
  return(
    <button className="square">
      {this.props.value}
    </button>
  );
}
```

### TODO 2

```javascript
<button onClick={() => alert('click')}>
```

### TODO 3

```javascript
constructor(props) {
  super(props);

  this.state = {
    value: null
  };
}

{this.props.value} => {this.state.value}
```

### TODO 4

```javascript
onClick={() => this.setState({value: 'X'})}
```

### TODO 5

```javascript
constructor(props) {
  super(props);

  this.state = {
    squares: Array(9).fill(null)
  };
}
```
To visualize the array: 
```javascript
[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]
```

### TODO 6

```javascript
renderSquare = () => {
  return <Square value={this.state.squares[i]} />;
}
```

### TODO 7

```javascript
renderSquare = () => {
  return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
         />
  );
}
```

### TODO 8

```javascript
<button
  className="square"
  onClick={() => this.props.onClick()}
/>
```

### TODO 9

```javascript
handleClick = (i) => {
  const squares = this.state.squares.slice();
  squares[i] = 'X';
  this.setState({squares: squares});
}
```

Go over immutability

# TODO 10

```javascript
const Square = (props) => {
  ...
}
```
Delete the constructor

### TODO 11

```javascript
constructor(props) {
  super(props);

  this.state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };
}

handleClick = (i) => {
  ...
  squares[i] = this.state.xIsNext ? 'X' : 'O';
  this.setState({
    squares: squares,
    xIsNext: !this.state.xIsNext
  });

  render() {
    const status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');

    ...
  }
}
```

### TODO 12

```javascript
calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

render() {
  let status;

  if (calculateWinner(this.state.squares))
    status = 'Winner: ' + winner;
  else
    const status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
}

handleClick = (i) => {
  ...

  if (calculateWinner(squares) || squares[i])
    return;

  ...
}
```