angular.module('Game', [])
.service('GameManager', function() {

  this.grid = [['','',''],['','',''],['','','']]
  this.player = 'X'
  this.winner = ''

  this.update = function($row, $col) {
    var current_symbol = this.swap_player()
    if (this.grid[$row][$col] == ''){
      this.grid[$row][$col] = current_symbol
      this.check_winning_positions()
    }
  }

  this.swap_player = function(){
  	if (this.player == 'X')
  	  this.player = 'O'
  	else
      this.player = 'X'
    return this.player
  }

  this.check_winning_positions = function(){
  	this.check_row_win()
    this.check_column_win()
  }

  this.check_row_win = function(){
  	var symbols_in_row
  	for(x=0;x<=2;x++){
      symbols_in_row = 0
  	  for(y=0;y<=2;y++)
  	  	if (this.grid[x][y] == this.player){
  	  	  symbols_in_row += 1
  	  	}
  	  	if(symbols_in_row == 3){
  	  	  this.winner = this.player
        }
  	}
  }

  this.check_column_win = function(){
    var symbols_in_column
    for(y=0;y<=2;y++){
      symbols_in_column = 0;
      for(x=0;x<=2;x++)
        if (this.grid[x][y] == this.player){
          symbols_in_column += 1
        }
        if(symbols_in_column == 3){
          this.winner = this.player
        }
    }
  }

})
