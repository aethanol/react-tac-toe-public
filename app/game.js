'use strict';

class TicTacToeGame{
    constructor(size){
        // error handling for size TODO set max size? idk if I need to
        if(size < 3) {
            throw new Error('Board size cannot be less than 3');
        }
        
        this._size = size;
        this._board = this._createBoard(size); // initialize empty 2D array for the board
        
        this._turn = Math.floor(Math.random() * 2); // randomly select player 1 or 2 (X or O) 
        this._winner = undefined; // no winner at beginning
        
        // initialize player scores object at 0 wins and ties
        this._score = {
            0 : 0,
            1 : 0,
            'tie' : 0
        };
    }
    
    set size(size){
        if(size < 3) {
            throw new Error('Board size cannot be less than 3');
        } else {
            this._size = size;
        }
    }
    
    _createBoard(size){
        var board = [];
        
        for(var i = 0; i < (size * size); i++){
            board[i] = 0;
        }
        
        return board;
    }
    
    get board(){
        return this._board;
    }
    
    get winner(){
        return this._winner;
    }
    
    get turn(){
        return this._turn;
    }
    
    get score(){
        return this._score;
    }
    
    takeTurn(index){
        // check to make sure there is no play at the index
        if(this._board[index] === 0){
            this._board[index] = this._turn; // set play index
            this._isWinner(index); // check if that play was a win
            
        }else {
            console.log('Space already played'); // TODO propogate error to the controler to notify view
        }
                      
    }
    
    // only need to check last move for winner
    _isWinner(index){
        
    }
}

class Turn{
    constructor(){
        
    }
}

module.exports.TicTacToeGame = TicTacToeGame;