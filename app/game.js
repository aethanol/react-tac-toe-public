'use strict';

class TicTacToeGame{
    constructor(size){
        // error handling for size TODO set max size? idk if I need to
        if(size < 3) {
            throw new Error('Board size cannot be less than 3');
        }
        
        this._size;
        this._winLogic = {
            0 : {
                diag1 : 0,
                diag2 : 0,
                row : [],
                col : []
            },
            
            1 : {
                diag1 : 0,
                diag2 : 0,
                row : [],
                col : []
            }
            
        };
        
        // call the build helper method
        this.build(size);
        this._turn = Math.floor(Math.random() * 2); // randomly select player 0 or 1 (O or X) 
        this._winner = undefined; // no winner at beginning
        
        // initialize player scores object at 0 wins and ties
        this._score = {
            0 : 0,
            1 : 0,
            'tie' : 0
        };
        
        
    }
    
    // method to build board
    build(size){
        if(size < 3) {
            throw new Error('Board size cannot be less than 3');
        } else {
            this._size = size;
            // then create win logic object for that size
            this._createWinLogic(size);
            this._board = this._createBoard(size);
        }
        
    }
    
    _createBoard(size){
        var board = [];
        
        for(var i = 0; i < (size * size); i++){
            board[i] = '';
        }
        
        return board;
    }
    
    _createWinLogic(size) {
        for(var i = 0; i < size; i++){
            this._winLogic[0].row[i] = 0;
            this._winLogic[0].col[i] = 0;
            this._winLogic[1].row[i] = 0;
            this._winLogic[1].col[i] = 0;
        }
        
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
        
        if(this._board[index] === '' && !this._winner){
            //console.log(this._turn);
            this._turnHelper(index); // set play index
            this._isWinner(); // check if that play was a win
            this._turn = (this._turn === 0) ? 1 : 0;
            //console.log(this._winLogic);
            console.log(this._winner);
        }else {
            console.log('Space already played'); // TODO propogate error to the controller to notify view
        }
                      
    }
    
    _turnHelper(index){
        this._board[index] = this._turn;
        
        // check all cols
        this._winLogic[this._turn]['col'][(index % this._size)] += 1;
        
        // check all rows
        this._winLogic;
        
        // check diag1
        if(index % (this._size + 1) === 0){
            this._winLogic[this._turn].diag1 += 1;  
        }
        
        // check diag2
        if(index !== 0 && index % (this._size - 1) === 0){
            this._winLogic[this._turn].diag2 += 1;  
        }
        
    }
    
    // check winLogic obj to see if any are at size
    _isWinner(){
        if(this._winLogic[this._turn].diag1 === this._size || this._winLogic[this._turn].diag2 === this._size ){
            this._winner = this._turn;
            return;
        }
        
        var col = this._winLogic[this._turn]['col'];
        
        for(var i = 0; i < col.length; i++){
            if(col[i] === this._size){
                this._winner = this._turn;
                return;
            }
        }
        
        var row = this._winLogic[this._turn]['row'];
        for(var j = 0; j < col.length; j++){
            if(row[j] === this._size){
                this._winner = this._turn;
                return;
            }
        }
       
    }

}
module.exports.TicTacToeGame = TicTacToeGame;