import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* What is React.Component?
    React is a JS library that lets you compose complex UIs from small, isolated pieces of code called components
    React has a few differenct kinds on components, this is the first one we will look at
    We use components to tell react what we want to see on the screen. When our data changes, React will efficiently update and re-render out components
    
    Square is a React component class. It takes in parameters, called props, and returns a hierarchy of views to display via the render method. 
        Example of using props:
        class ShoppingList extends React.Component {
            render() {
                return (
                    <div className="shopping-list">
                        <h1>Shopping List for {this.props.name}</h1>
                        <ul>
                            <li>Instagram</li>
                            <li>WhatsApp</li>
                            <li>Oculus</li>
                        </ul>
                    </div>
                );
            }
        }
        Example usage: <ShoppingList name="Mark" />

    The render method returns a description of what you want to see on the screen.
    React takes this description and displays the result.
    The shopping list example only renders built-in stuff like <div>, but we can create custom components too.
    For example, now we can refer to the whole shopping list by writing <ShoppingList />
*/
class Square extends React.Component {
    constructor(props){
        super(props);
        this.state={value:null};
    }


    //what does it do tho? it renders a single button!
    render() {
    /* since we added the prop value when calling renderSquare, we can now access that value in the render mehtod here:
    now instead of each square just being a blank tile, it will have it's corresponding number in it.
    this is because in the Board render() function, we pass each tiles respective value to the renderSquare method which then passes it as a prop to the Square's render method.


    the next thing that we want to do is make the squares interactive. In this example we want clicking on the squares to do something.
    as each square is a button, ofc we need to use onClick.
    We need to pass a function for the onClick property, and we will do so using JS's 'arrow' (lambda) notation:
    
    we started off by just alerting us whenever we click it. But now we want the square to "remember" that is was clicked. 
    we want this because after it is clicked it should be filled with an "X" mark. To do this we will use "state".
    
    In order to give a react component a state, we must set it in its constructor. this.state should ne a private field.
    Once we have done that, we should changes Square's render method to display the state's value when clicked.
        replaced this.props.value with this.state.value
        made the event handler set the state with this.setState({value: 'X'})

    */ 
      return (
        <button className="square" 
                onClick={
            ()=>{this.setState({value: 'X'})}}
        >
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    //what does it do? it renders 9 squares.
    //also creates the method renderSquare which returns a Square object
    renderSquare(i) {
      // now we have made it so that we are passing a 'prop' called value to the Square.
      return <Square value ={i}/>;
    }
  
    render() {
      const status = 'Next player: X';
  
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
  
  class Game extends React.Component {
      // renders a board with placeholder values.
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );