'use strict';

class TicTacToeGame{
    constructor(size){
        // error handling for size TODO set max size? idk if I need to
        if(size < 3) {
            throw new Error('Board size cannot be less than 3');
        }
        
        // initialize player scores object at 0 wins and ties
        this._score = {
            0 : 0,
            1 : 0,
            'tie' : 0
        };
        
        // call the build helper method
        this.build(size);    
    }
    
    // method to build board
    build(size){
        if(size < 3) {
            throw new Error('Board size cannot be less than 3');
        } else {
            this._size = parseInt(size);
            // randomize initial turn
            this._turnCalc = Math.floor(Math.random() * 2);
            this._turn = this._turnCalc;
            this._winner = undefined;
            this._count = 0;
            // then create win logic object for that size
            this._board = this._createBoard(size);
            this._createWinLogic(size);
            
        }
        
    }
    
    // return a new board of given size
    _createBoard(size){
        var board = [];
        
        for(var i = 0; i < (size * size); i++){
            board[i] = '';
        }
        
        return board;
    }
    
    // create the obj to check if game was won
    _createWinLogic(size) {
        
        // inditialize empty obj of game logic
        this._winLogic = [
            {
                diag1 : 0,
                diag2 : 0,
                row : [],
                col : []                
            },     
            {
                diag1 : 0,
                diag2 : 0,
                row : [],
                col : []   
            }
        ];
        
        // loop through and create an index for every size of the board
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
        if(this._turn === 0){
            return 'O';
        }
        if(this._turn === 1){
            return 'X';
        }
        
    }
    
    get size() {
        return this._size;
    }
    
    get score(){
        return this._score;
    }
    
    // main turn method that calls helpers
    takeTurn(index){
        
        // check there was a winner or if played
        if(this._board[index] === '' && this._winner === undefined){
            this._turnHelper(index); // set play index
            this._count ++;
            this._isWinner();
            this._turn = (this._turn === 0) ? 1 : 0;
        }else {
            alert('Space already played');
        }
    }
    
    // quick helper to convert 0 to O and 1 to X
    _playerConversion(player){
        if(player === 0){
            return 'O';
        }
        
        if(player === 1){
            return 'X';
        }
    }
    
    // check which row, col, or diagonal of the play
    _turnHelper(index){
        // take the turn (convert to X and O)
        this._board[index] = this._playerConversion(this._turn);
        
        // increment winLogic at that col for that player
        this._winLogic[this._turn].col[(index % this._size)] += 1;
        
        // check if it was a row
        this._winLogic[this._turn].row[(Math.floor(index / this._size))] += 1;

        // check diag1
        if(index % (this._size +1) === 0){
            //console.log('diag1');
            this._winLogic[this._turn].diag1 += 1;  
        }
        
        // check diag2 -- not first index or last index
        if((index !== 0) && index !== Math.pow(this._size,2) - 1  && (index % (this._size - 1) === 0)){
            //console.log('diag2');
            this._winLogic[this._turn].diag2 += 1;  
        }    
    }
    
    // check winLogic obj to see if any are at size
    _isWinner(){
        if(this._count === Math.pow(this._size, 2)){
            this._score['tie'] +=1;
            alert('TIE! Press reset to play again');
        }
        
        if(this._winLogic[this._turn].diag1 === this._size){
            this._winner = this._turn;
            this._score[this._turn] += 1;
            alert('WINNER! Press reset to play again');
        }
        
        if(this._winLogic[this._turn].diag2 === this._size){
            this._winner = this._turn;
            this._score[this._turn] += 1;
            alert('WINNER! Press reset to play again');
        }
        
        var col = this._winLogic[this._turn].col;
        
        // loop through col logic to see if winner
        for(var i = 0; i < col.length; i++){
            if(col[i] === this._size){
                this._winner = this._turn;
                this._score[this._turn] += 1;
                alert('WINNER! Press reset to play again');
            }
        }
        
        var row = this._winLogic[this._turn].row;
        
        // loop through row logic to see if winner
        for(var j = 0; j < row.length; j++){
            if(row[j] === this._size){
                this._winner = this._turn;
                this._score[this._turn] += 1;
                alert('WINNER! Press reset to play again');
            }
        }
       
    }

}
module.exports.TicTacToeGame = TicTacToeGame;