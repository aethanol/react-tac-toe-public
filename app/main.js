'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var game = require('./game.js'); // Game Model
var components = require('./components.jsx'); // React View
// var controller = require('./controller.js'); // Controller

var Board = components.GameBoard;
var TicTacToeGame = new game.TicTacToeGame(4);

var controller = {
    takeTurn : function(index){
        console.log(index);
        TicTacToeGame.takeTurn(index);
        this.update();
    },
    
    update : function(){
        ReactDOM.render(<Board model={TicTacToeGame} controller={this}/>, document.getElementById('content')); 
    }
};

// ReactDOM.render(<View model={TicTacToeGame} controller={controller}/>, document.getElementById('content')); 

controller.update();


// var HelloMessage = React.createClass({
//   render: function() {
//     return <h1>Hello World</h1>;
//   }
// });

module.exports.controller = controller;