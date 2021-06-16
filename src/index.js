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
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
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