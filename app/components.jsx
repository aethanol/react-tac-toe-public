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

// handle the size change and reset with an input elelemt and a button to reset
var Reset = React.createClass({
    // state of the input element to default render 4X4
    getInitialState: function() {
        return {
            value: '4'
        };
    },
    // update the state if the box changes
    handleChange: function(evt) {
        this.setState({
            value: evt.target.value
        });
    },
    
    // reset the model
    handleClick : function() {
        this.props.controller.size(this.state.value)
    },
    
    render : function() {
        return (
            
               <div>
                    <input value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Reset</button>
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

module.exports.GameBoard = GameBoard;