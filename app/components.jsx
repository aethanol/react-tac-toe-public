'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap').Button;
//var Game = require('./game.js');

// keep track of turns
var Turn = React.createClass({
    render: function() {
        return (
            <div>
                
            </div>
        )
        
    }
});

// keep track of previous scores
var Score = React.createClass({
    render : function() {
        return (
            <div>
                <table>
                    <tr>
                        <th scope='col'>Score</th>
                    </tr>
                    <tr>
                        <th scope="row">Player X:</th>
                        <td>{this.props.score[0]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Player O:</th>
                        <td>{this.props.score[1]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Ties:</th>
                        <td>{this.props.score['tie']}</td>
                    </tr>                
                </table>
            </div>
        )
        
    }
});

var Information = React.createClass({
    render : function() {
        var score = this.props.model.score;
        var turn = this.props.model.turn;
        return (
            <div>
                <Score score={score}/>
                <Turn turn={turn}/>
            </div>
        )
    }
});

// tiles of the tic tac toe 
// TODO: should each tile be a separate component???
// TODO--EXTRA CREDIT: dynamic resizing of tic tac toe board: 3x3 -> 4x4 -> 5x5
var Tile = React.createClass({
        // TODO call controler to handle the click
       // passthrough function so controller handles the click
    handleClick : function() {
        this.props.controller.takeTurn(this.props.id);
    },
    
    render : function() {
        return <Button onClick={this.handleClick}></Button>
    }
    
});

// contains Tiles
// TODO use .map function somehow??? lol somehow foreach
var Board = React.createClass({
    render : function() {
       return (
           <div id='board'>
             <div id='0'>
                <Tile id={0} />
                <Tile id={1} />
                <Tile id={2} />       
             </div>
             <div id='1'>
                <Tile id={3} />
                <Tile id={4} />
                <Tile id={5} />       
             </div>
             <div id='2'>
                <Tile id={6} />
                <Tile id={7} />
                <Tile id={8} />       
             </div>
          </div>           
            ) 
    }
});

// Title of our game
var Title = React.createClass({
    render : function() {
         return <h1>React-Tac-Toe</h1>
    }
});

// Parent component for all the components (title and board)
var GameBoard = React.createClass({
    render : function() {
        return (
            <div>
                <Title />
                <Board model={this.props.model}/>   
                <Information model={this.props.model} />       
            </div>
        )
        
    }
});

// pass in controller as prop somewhere here?
//ReactDOM.render(<HelloMessage />, document.getElementById('content'));

module.exports.GameBoard = GameBoard;