'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Bootstrap = require('react-bootstrap');
var Button = Bootstrap.Button;
var Dropdown = Bootstrap.DropdownButton;
var ButtonGroup = Bootstrap.ButtonGroup;
var MenuItem = Bootstrap.MenuItem;

//var Game = require('./game.js');

// keep track of turns
var Turn = React.createClass({
    render: function() {
        return (
            <span>
                <h3>Turn {this.props.turn}</h3>    
            </span>
        )
        
    }
});

// keep track of previous scores
var Score = React.createClass({
    render : function() {
        return (
            <span>
                <h3>Score</h3>
                <h5>Player X: {this.props.score['1']}</h5> 
                <h5>Player 0: {this.props.score['0']}</h5> 
                <h5>Ties: {this.props.score['tie']} </h5> 
            </span>
                
            
            
                // <tbody>
                //     <tr>
                //         <th scope='col'>Score</th>
                //     </tr>
                //     <tr>
                //         <th scope="row">Player X:</th>
                //         <td>{this.props.score[0]}</td>
                //     </tr>
                //     <tr>
                //         <th scope="row">Player O:</th>
                //         <td>{this.props.score[1]}</td>
                //     </tr>
                //     <tr>
                //         <th scope="row">Ties:</th>
                //         <td>{this.props.score['tie']}</td>
                //     </tr>                
                // </tbody>
            
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
        // TODO call controller to handle the click
       // passthrough function so controller handles the click
    handleClick : function() {
        this.props.controller.takeTurn(this.props.id);
    },
    
    render : function() {
        return <Button onClick={this.handleClick} id="tile">{this.props.model.board[this.props.id]}</Button>
    }
    
});

// contains Tiles
var Board = React.createClass({
    render : function() {
        var size = this.props.model.size;
        // map all elements of model array and make a button for each
        var tiles = this.props.model.board.map(function(element ,index){
            // conditional to set breaks for the board size
            if(index % (this.props.model.size) === 0){
                return (
                    <span>
                    <br/>
                    <Tile key={index} id={index} controller={this.props.controller} model={this.props.model}/>
                    </span>
                )
            }else {
                return <Tile key={index} id={index} controller={this.props.controller} model={this.props.model}/>    
            }
        },this)
        
        return (
           <div id='board'>
                {tiles}
           </div>     
            ) 
    }
});

var Reset = React.createClass({
    handleClick : function() {
        this.props.controller.size(this.props.eventKey);
    },
    
    render : function() {
        return (
            <div>
                <input onChange={this.handleChange} />
                <button id='reset' onClick={this.handleClick}>Reset</button>  
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
                <Board model={this.props.model} controller={this.props.controller}/>   
                <Information model={this.props.model} />
                <Reset model={this.props.model} controller={this.props.controller}/> 
            </div>
        )
        
    }
});

// pass in controller as prop somewhere here?
//ReactDOM.render(<HelloMessage />, document.getElementById('content'));

module.exports.GameBoard = GameBoard;